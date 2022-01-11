import { model, Schema, Document } from 'mongoose';
import { Station } from '@/interfaces/stations.interface';

const stationSchema: Schema = new Schema({
  geometry: {
    coordinates: { type: [Number] },
  },
  properties: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    coordinates: { type: [Number] },
    totalDocks: { type: Number, required: true },
    docksAvailable: { type: Number, required: true },
    bikesAvailable: { type: Number, required: true },
    classicBikesAvailable: { type: Number, required: true },
    smartBikesAvailable: { type: Number, required: true },
    electricBikesAvailable: { type: Number, required: true },
    rewardBikesAvailable: { type: Number, required: true },
    rewardDocksAvailable: { type: Number, required: true },
    kioskStatus: String,
    kioskPublicStatus: String,
    kioskConnectionStatus: String,
    kioskType: { type: Number, required: true },
    addressStreet: String,
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
    closeTime: {},
    eventEnd: {},
    eventStart: {},
    isEventBased: Boolean,
    isVirtual: Boolean,
    kioskId: Number,
    notes: {},
    openTime: {},
    publicText: String,
    timeZone: {},
    trikesAvailable: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  at: { type: Date, required: true, default: Date.now },
});

const stationsModel = model<Station & Document>('Station', stationSchema);

export default stationsModel;
