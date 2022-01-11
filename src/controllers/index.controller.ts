import { NextFunction, Request, Response } from 'express';
import weatherService from '@/services/weathers.service';
import stationService from '@/services/stations.service';

class IndexController {
  public stationService = new stationService();
  public weatherService = new weatherService();

  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  public syncStationsAndWeather = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.stationService.syncStationData();
      await this.weatherService.syncWeatherData();

      res.status(200).json({ message: 'Stations are stored in db' });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
