import Cache from '@helpers/cache';
import type { CarBasicInfo } from '@type/Car.type';
import type { Filters } from '@type/Filter.type';
import axios from 'axios';

const OFFER_CACHE_TTL = 60 * 60; // 60 Minutes

const getOfferQuery = `
  query getOffer($offerID: ID!) {
    getOffer(offerID: $offerID) {
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
        exteriorColor
        gearbox
        category
    }
  }
`;

export async function getOffer(offerID: string): Promise<CarBasicInfo> {
  let response;

  response = await Cache.getAsync<Filters>(`offer:${offerID}`, true);

  console.log(`redis rep: ${response}`);

  if (!response) {
    console.log('fetching');
    const result = await axios.post('https://im-graphql.instamotion.com/', {
      query: getOfferQuery,
      variables: {
        offerID,
      },
    });
    await Cache.setAsync(`offer:${offerID}`, JSON.stringify(result.data), OFFER_CACHE_TTL);
    response = result.data;
  }

  return response.data.getOffer;
}
