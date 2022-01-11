import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import weathersModel from '@/models/weathers.model';
import { Weather } from '@/interfaces/weathers.interface';
import axios from 'axios';
import moment from 'moment';

class StationService {
  public weathers = weathersModel;

  public async syncWeatherData(): Promise<void> {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Philadelphia&appid=d3ca182276f5e243821e4eeb74c157c7`);

      const at = moment().startOf('hour');
      this.weathers.create({ ...data, at });
    } catch (e) {
      throw new HttpException(500, 'Errors occurred in syncing');
    }
  }
}

export default StationService;
