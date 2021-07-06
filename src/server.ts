import Logger from '@helpers/logger';
import fastify from 'fastify';
import next from 'fastify-nextjs';
import fstatic from 'fastify-static';
import path from 'path';
import { routes as getFilters } from './routes/filters';
import { routes as getOffers } from './routes/offers';
import { routes as getOffer } from './routes/offers/byId';

const { NODE_ENV, SERVER_HOST, SERVER_PORT } = process.env;

if (!(SERVER_PORT && SERVER_HOST)) {
  throw new Error('Missing fastify configuration.');
}

(async () => {
  const server = fastify({
    logger: Logger,
    pluginTimeout: 30 * 1000,
    disableRequestLogging: true,
  });

  server.register(fstatic, {
    root: path.join(__dirname, '..', 'public'),
  });

  server.register(getFilters);
  server.register(getOffers);
  server.register(getOffer);

  server.register(next, { dev: NODE_ENV === 'development' }).after((error) => {
    if (error) {
      throw error;
    } else {
      server.next('/');
      server.next('/auto/*');
    }
  });

  await server.listen(Number.parseInt(SERVER_PORT, 10), SERVER_HOST);
})();
