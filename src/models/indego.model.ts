import { model, Schema, Document } from 'mongoose';
import { Indego } from '@interfaces/indego.interface';

const indegoSchema: Schema = new Schema({
  features: [
    {
      geometry: { coordinates: [Number], type: String },
      properties: {
        id: Number,
        name: String,
        coordinates: [Number],
        totalDocks: Number,
        docksAvailable: Number,
        bikesAvailable: Number,
        classicBikesAvailable: Number,
        smartBikesAvailable: Number,
        electricBikesAvailable: Number,
        rewardBikesAvailable: Number,
        rewardDocksAvailable: Number,
        kioskStatus: String,
        kioskPublicStatus: String,
        kioskConnectionStatus: String,
        kioskType: Number,
        addressCity: String,
        addressState: String,
        addressZipCode: String,
        bikes: [
          {
            dockNumber: Number,
            isElectric: Boolean,
            isAvailable: Boolean,
            battery: Number,
          },
        ],
        closeTime: null,
        eventEnd: null,
        eventStart: null,
        isEventBased: Boolean,
        isVirtual: Boolean,
        kioskId: Number,
        notes: null,
        openTime: null,
        publicText: String,
        timeZone: null,
        trikesAvailable: Number,
        latitude: Number,
        longitude: Number,
      },
      type: String,
    },
  ],
  type: String,
});

const indegoModel = model<Indego & Document>('Indego', indegoSchema);

export default indegoModel;
