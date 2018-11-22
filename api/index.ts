import { server, config } from 'artoo';
import { routes } from './routes';

let app: server.app = {
  domain: config.get('API_HOST', 'api.test.test'),
  type: 'api',
  routes: routes
};

export default app;