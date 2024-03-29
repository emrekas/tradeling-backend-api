import 'dotenv/config';
import '@/index';
import App from '@/app';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import StationsRoute from '@routes/stations.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new StationsRoute()]);

app.listen();
