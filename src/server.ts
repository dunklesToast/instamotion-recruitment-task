import fastify from 'fastify';
import next from 'fastify-nextjs';
import fstatic from 'fastify-static';
import path from 'path';
import { routes as getFilters } from './routes/filters';
import { routes as getOffers } from './routes/offers';

(async () => {
  const server = fastify();

  server.register(fstatic, {
    root: path.join(__dirname, '..', 'public'),
  });

  server.register(getFilters);
  server.register(getOffers);

  server.register(next, { dev: process.env.NODE_ENV === 'development' }).after((error) => {
    if (error) {
      throw error;
    } else {
      server.next('/');
    }
  });

  await server.listen(1337, '0.0.0.0');
})();
