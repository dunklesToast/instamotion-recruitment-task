import React from 'react';
import { getOffer } from '@helpers/api/getOffer';
import { OfferTemplate } from '@templates/OfferTemplate/OfferTemplate';
import type { CarBasicInfo } from '@type/Car.type';
import type { NextPageContext } from 'next';
import Head from 'next/head';

export type IndexServerProps = {
  props: {
    offer: CarBasicInfo;
  };
};

export default function Offer({ offer }: IndexServerProps['props']): JSX.Element {
  return (
    <>
      <Head>
        <title>
          {offer.make} {offer.model} | FooCar
        </title>
        <meta
          name='description'
          content={`${offer.make} ${offer.model} mit ${offer.mileage}km jetzt bei FooCar kaufen.`}
        />
        <meta
          property='og:description'
          content={`${offer.make} ${offer.model} mit ${offer.mileage}km jetzt bei FooCar kaufen.`}
        />
        <meta property='og:image' content={offer.image} />
        <meta property='og:title' content={`${offer.make} ${offer.model} | FooCar`} />
      </Head>
      <OfferTemplate offer={offer} />
    </>
  );
}

export async function getServerSideProps(
  ctx: NextPageContext & { params: { id: string } }
): Promise<IndexServerProps> {
  const offer = await getOffer(ctx.params.id);

  return {
    props: {
      offer,
    },
  };
}
