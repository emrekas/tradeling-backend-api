import { NextFunction, Request, Response } from 'express';
import StationsService from '@/services/stations.service';
import { Station } from '@/interfaces/stations.interface';

class StationsController {
  public stationsService = new StationsService();

  public syncStations = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await this.stationsService.syncStationData();

      res.status(200).json({ message: 'Stations are stored in db' });
    } catch (error) {
      next(error);
    }
  };

  public getStationByIdAndDate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const kioskId: number = parseInt(req.params.kioskId);
      const at = new Date(`${(req.query as any).at}.000Z`);

      const findOneStation: Station = await this.stationsService.findStationByIdAndDate(kioskId, at);
      res.status(200).json({ data: findOneStation, message: 'One station was found' });
    } catch (error) {
      next(error);
    }
  };
}

export default StationsController;
