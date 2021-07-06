import type { Filters } from '@type/Filter.type';
import axios from 'axios';
import Cache from '../cache';

const FILTER_CACHE_TTL = 60 * 10; // 10 Minutes

const getOffersQuery = `
  query getFilters($filters: String!) {
    getFilters(filters: $filters) {
      make
      model
      category
      gearbox
      doors
      carCondition
      emissionClass
      exteriorColor
      interiorColor
      fuel
      climatisation
      interiorType
      __typename
    }
  }
`;

export async function getFilters(): Promise<Filters> {
  let response;

  response = await Cache.getAsync<Filters>('filters', true);

  if (!response) {
    const result = await axios.post('https://im-graphql.instamotion.com/', {
      query: getOffersQuery,
      variables: {
        filters:
          'interiorColor,doors,emissionClass,fuel,exteriorColor,gearbox,category,make,model,modelGroup,carCondition,climatisation,interiorType',
      },
    });
    await Cache.setAsync('filters', JSON.stringify(result.data), FILTER_CACHE_TTL);
    response = result.data;
  }

  return response.data.getFilters;
}
