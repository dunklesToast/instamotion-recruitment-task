import { getFilters } from '@helpers/api/getFilters';
import type { FastifyInstance } from 'fastify';

export async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.get('/filters', async (req, res) => {
    return res.send(await getFilters());
  });
}
