import type { Filters } from '@type/Filter.type';
import axios from 'axios';

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
  const response = await axios.post('https://im-graphql.instamotion.com/', {
    query: getOffersQuery,
    variables: {
      filters:
        'interiorColor,doors,emissionClass,fuel,exteriorColor,gearbox,category,make,model,modelGroup,carCondition,climatisation,interiorType',
    },
  });

  return response.data.data.getFilters;
}
