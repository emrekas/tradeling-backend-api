import { hash } from 'bcrypt';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import indegoModel from '@/models/indego.model';
import { Indego } from '@/interfaces/indego.interface';
import axios from 'axios';

class IndegoService {
  // public indegos = indegoModel;

  public async syncIndegoData() {
    try {
      const indegoData: Indego = await axios.get('https://www.rideindego.com/stations/json/');
      console.log(indegoData);

      // this.indegos.create(indegoData);
    } catch (e) {
      console.log(e);
    }
  }
}

export default IndegoService;
