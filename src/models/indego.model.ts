import { model, Schema, Document } from 'mongoose';
import { Indego } from '@interfaces/indego.interface';

const bikeSchema: Schema = new Schema({
  dockNumber: Number,
  isElectric: Boolean,
  isAvailable: Boolean,
  battery: Number,
});

const propertiesSchema: Schema = new Schema({
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
  bikes: [bikeSchema],
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
});

const geometrySchema: Schema = new Schema({
  coordinates: [Number],
  type: String,
});

const featureSchema = new Schema({
  geometry: geometrySchema,
  properties: propertiesSchema,
  type: String,
});

const indegoSchema: Schema = new Schema({
  features: [featureSchema],
  type: String,
});

const indegoModel = model<Indego & Document>('Indego', indegoSchema);

export default indegoModel;
