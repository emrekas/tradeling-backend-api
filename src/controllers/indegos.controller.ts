import { NextFunction, Request, Response } from 'express';
import IndegoService from '@services/indego.service';

class IndegosController {
  public indegoService = new IndegoService();

  public getStations = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await this.indegoService.syncIndegoData();

      res.status(200).json({ message: 'Indego data will sync every one hour' });
    } catch (error) {
      console.log(error);

      next(error);
    }
  };
}

export default IndegosController;
