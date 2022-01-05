import { hash } from 'bcrypt';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';
import indegoModel from '@/models/indego.model';
import { Indego } from '@/interfaces/indego.interface';
import axios from 'axios';

class IndegoService {
  public indegos = indegoModel;

  public async syncIndegoData() {
    try {
      // const indegoData = await axios.get('https://www.rideindego.com/stations/json/');
      // console.log(indegoData.data);

      const indego: any = JSON.parse(`{
        "features": [
          {
            "geometry": {
              "coordinates": [
                -75.16374,
                39.95378
              ],
              "type": "Point"
            },
            "properties": {
              "id": 3004,
              "name": "Municipal Services Building Plaza",
              "coordinates": [
                -75.16374,
                39.95378
              ],
              "totalDocks": 30,
              "docksAvailable": 15,
              "bikesAvailable": 15,
              "classicBikesAvailable": 12,
              "smartBikesAvailable": 0,
              "electricBikesAvailable": 3,
              "rewardBikesAvailable": 15,
              "rewardDocksAvailable": 15,
              "kioskStatus": "FullService",
              "kioskPublicStatus": "Active",
              "kioskConnectionStatus": "Active",
              "kioskType": 1,
              "addressStreet": "1401 John F. Kennedy Blvd.",
              "addressCity": "Philadelphia",
              "addressState": "PA",
              "addressZipCode": "19102",
              "bikes": [
                {
                  "dockNumber": 3,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 13,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 16,
                  "isElectric": true,
                  "isAvailable": true,
                  "battery": 0.8
                },
                {
                  "dockNumber": 17,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 20,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 21,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 22,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 23,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 24,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 25,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 26,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 27,
                  "isElectric": true,
                  "isAvailable": true,
                  "battery": 0.8
                },
                {
                  "dockNumber": 28,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                },
                {
                  "dockNumber": 29,
                  "isElectric": true,
                  "isAvailable": true,
                  "battery": 0.8
                },
                {
                  "dockNumber": 30,
                  "isElectric": false,
                  "isAvailable": true,
                  "battery": null
                }
              ],
              "closeTime": null,
              "eventEnd": null,
              "eventStart": null,
              "isEventBased": false,
              "isVirtual": false,
              "kioskId": 3004,
              "notes": null,
              "openTime": null,
              "publicText": "",
              "timeZone": null,
              "trikesAvailable": 0,
              "latitude": 39.95378,
              "longitude": -75.16374
            },
            "type": "Feature"
          }
        ],
        "type": "asd"
      }`);
      console.log(indego);

      this.indegos.create(indego);
    } catch (e) {
      console.log(e);
    }
  }
}

export default IndegoService;
