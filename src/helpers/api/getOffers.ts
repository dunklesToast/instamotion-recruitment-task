import type { CarBasicInfo } from '@type/Car.type';
import axios from 'axios';

const getOffersQuery = `
  query getOffers($q: JSON!) {
    getOffers(q: $q) {
      records {
        make
        model
        mileage
        power
        firstRegistration
        fuel
        consumptionCombined
        co2
        price
        image
        monthlyInstallment
        variant
        images
        offerID
      }
    }
  }
`;

export type GetOfferFilter = {
  'make-model'?: string;
  category?: string;
  gearbox?: string;
  exteriorColor?: string;
  mileAge?: string;
  power?: string;
  price?: string;
};

type GetOfferQuery = {
  page: number;
  sortBy?: string;
  pageSize: number;
  filter: GetOfferFilter;
};

export async function getOffers({
  page,
  sortBy = 'price.consumerPriceGross::asc',
  pageSize,
  filter,
}: GetOfferQuery): Promise<CarBasicInfo[]> {
  const response = await axios.post('https://im-graphql.instamotion.com/', {
    query: getOffersQuery,
    variables: {
      q: {
        'page-size': pageSize,
        page,
        'sort-by': sortBy,
        ...filter,
      },
    },
  });

  return response.data.data.getOffers.records;
}
