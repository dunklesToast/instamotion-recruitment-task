import { generateImgProxyUrl } from '@helpers/imgproxy';
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

/**
 * This Method does not use caching, since there are filters etc. and it would be a bit overkill for a demo
 */
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

  const offers = response.data.data.getOffers.records;

  offers.forEach((offer) => {
    // eslint-disable-next-line no-param-reassign
    offer.image = generateImgProxyUrl(offer.image, ':200:');
  });

  return response.data.data.getOffers.records;
}
