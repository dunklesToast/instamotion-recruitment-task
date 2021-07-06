import { getOffers } from '@helpers/api/getOffers';
import type { HTTPFilterBody } from '@type/Filter.type';
import type { JSONSchemaType } from 'ajv';
import type { FastifyInstance } from 'fastify';

type Body = {
  pageSize: number;
  page: number;
  sortBy?: string;
  filter: HTTPFilterBody;
};

const FilterSchema: JSONSchemaType<HTTPFilterBody> = {
  type: 'object',
  properties: {
    'make-model': {
      type: 'string',
      nullable: true,
    },
    category: {
      type: 'string',
      nullable: true,
    },
    gearbox: {
      type: 'string',
      nullable: true,
    },
    fuel: {
      type: 'string',
      nullable: true,
    },
    exteriorColor: {
      type: 'string',
      nullable: true,
    },
    mileage: {
      type: 'string',
      nullable: true,
    },
    power: {
      type: 'string',
      nullable: true,
    },
    price: {
      type: 'string',
      nullable: true,
    },
  },
};

const RouteBodyOptions: JSONSchemaType<Body> = {
  type: 'object',
  required: ['pageSize', 'page', 'filter'],
  properties: {
    pageSize: {
      type: 'number',
      minimum: 0,
    },
    page: {
      type: 'number',
      minimum: 1,
    },
    sortBy: {
      type: 'string',
      nullable: true,
    },
    filter: FilterSchema,
  },
};

const RouteOptions = {
  schema: {
    body: RouteBodyOptions,
  },
};

export async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.post<{ Body: Body }>('/offers', RouteOptions, async (req, res) => {
    res.status(200).send(await getOffers(req.body));
  });
}
