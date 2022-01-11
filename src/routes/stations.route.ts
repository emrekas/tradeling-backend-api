import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import StationsController from '@/controllers/stations.controller';

class StationsRoute implements Routes {
  public path = '/stations';
  public router = Router();
  public stationsController = new StationsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:kioskId`, this.stationsController.getStationByIdAndAt);
    this.router.get(`${this.path}`, this.stationsController.getStationsByAt);
  }
}

export default StationsRoute;
