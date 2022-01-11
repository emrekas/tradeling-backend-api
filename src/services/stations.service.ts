import { HttpException } from '@exceptions/HttpException';
import stationsModel from '@/models/stations.model';
import { Station } from '@/interfaces/stations.interface';
import axios from 'axios';
import moment from 'moment';

class StationsService {
  public stations = stationsModel;

  public async syncStationData(): Promise<void> {
    try {
      const { data } = await axios.get('https://kiosks.bicycletransit.workers.dev/phl');

      const stationsData: Station[] = data.features.map((station: Station) => ({ ...station, at: moment().startOf('hour') }));
      await this.stations.insertMany(stationsData);
    } catch (e) {
      throw new HttpException(500, 'Errors occurred in syncing');
    }
  }

  public async findStationByIdAndDate(at: Date, kioskId: number) {
    try {
      return this.stations.findOne({ 'properties.id': kioskId, at: at });
    } catch (e) {
      throw new HttpException(404, 'Data not found');
    }
  }

  public async findStationsByAt(at: Date): Promise<Station[]> {
    return this.stations.find({ at });
  }
}

export default StationsService;
