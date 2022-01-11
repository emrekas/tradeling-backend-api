import { model, Schema, Document } from 'mongoose';
import { Weather } from '@/interfaces/weathers.interface';

const weatherSchema: Schema = new Schema({
  id: { type: Number, required: true },
  name: String,
  coord: { lon: Number, lat: Number },
  weather: [
    {
      id: Number,
      main: String,
      description: String,
      icon: String,
    },
  ],
  base: String,
  main: {
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
  },
  visibility: Number,
  wind: { speed: Number, deg: Number },
  clouds: { all: Number },
  dt: Number,
  sys: {
    type: { type: Number },
    id: Number,
    country: String,
    sunrise: Number,
    sunset: Number,
  },
  timezone: { type: Number },
  cod: Number,
  at: { type: Date, required: true, default: Date.now },
});

const weathersModel = model<Weather & Document>('Weather', weatherSchema);

export default weathersModel;
