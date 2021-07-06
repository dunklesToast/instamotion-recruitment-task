import React from 'react';
import { getOffer } from '@helpers/api/getOffer';
import { OfferTemplate } from '@templates/OfferTemplate/OfferTemplate';
import type { CarBasicInfo } from '@type/Car.type';
import type { NextPageContext } from 'next';

export type IndexServerProps = {
  props: {
    offer: CarBasicInfo;
  };
};

export default function Offer({ offer }: IndexServerProps['props']): JSX.Element {
  return <OfferTemplate offer={offer} />;
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
