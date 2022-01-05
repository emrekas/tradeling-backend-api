import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { uri }: dbConfig = config.get('dbConfig');

export const dbConnection = {
  uri,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
