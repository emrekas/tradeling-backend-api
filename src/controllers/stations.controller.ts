import { NextFunction, Request, Response } from 'express';
import StationsService from '@/services/stations.service';
import WeathersService from '@/services/weathers.service';

class StationsController {
  public stationsService = new StationsService();
  public weathersService = new WeathersService();

  public syncStations = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.stationsService.syncStationData();

      res.status(200).json({ message: 'Stations are stored in db' });
    } catch (error) {
      next(error);
    }
  };

  public getStationByIdAndAt = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!(req.query as any).at) return res.status(400).send("Query param 'at' needs to be passed");
      const kioskId: number = parseInt(req.params.kioskId);
      const at = new Date(`${(req.query as any).at}.000Z`);

      const findOneStation = await this.stationsService.findStationByIdAndDate(at, kioskId);
      res.status(200).json({ data: findOneStation, message: 'One station was found' });
    } catch (error) {
      next(error);
    }
  };

  public getStationsByAt = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!(req.query as any).at) return res.status(400).send("Query param 'at' needs to be passed");

      const at = new Date(`${(req.query as any).at}.000Z`);
      const [stations, weather] = await Promise.all([this.stationsService.findStationsByAt(at), this.weathersService.findWeatherByAt(at)]);

      if (!stations || !weather || !stations.length || !weather.length) {
        return res.status(404).send('Snapshot not found for requested time');
      }

      res.send({ at, stations, weather: weather[0] });
    } catch (error) {
      next(error);
    }
  };
}

export default StationsController;
