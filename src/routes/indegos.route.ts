import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import IndegosController from '@/controllers/indegos.controller';

class IndegosRoute implements Routes {
  public path = '/indegos';
  public router = Router();
  public indegosController = new IndegosController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indegosController.getStations);
  }
}

export default IndegosRoute;
