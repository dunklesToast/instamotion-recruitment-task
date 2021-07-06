import { getOffer } from '@helpers/api/getOffer';
import type { JSONSchemaType } from 'ajv';
import type { FastifyInstance } from 'fastify';

type Parameters = {
  id: string;
};

const ParameterSchema: JSONSchemaType<Parameters> = {
  type: 'object',
  required: ['id'],
  properties: {
    id: {
      type: 'string',
    },
  },
};

const RouteOptions = {
  schema: {
    params: ParameterSchema,
  },
};

export async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.get<{ Params: Parameters }>('/offers/:id', RouteOptions, async (req, res) => {
    res.status(200).send(await getOffer(req.params.id));
  });
}
