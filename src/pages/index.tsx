import React from 'react';
import { getFilters } from '@helpers/api/getFilters';
import { getOffers } from '@helpers/api/getOffers';
import { IndexLayout } from '@templates/IndexLayout/IndexLayout';
import type { CarBasicInfo } from '@type/Car.type';
import type { Filters } from '@type/Filter.type';

export type IndexServerProps = {
  props: {
    offers: CarBasicInfo[];
    filters: Filters;
  };
};

export default function Index({ offers, filters }: IndexServerProps['props']): JSX.Element {
  return <IndexLayout offers={offers} filters={filters} />;
}

export async function getServerSideProps(): Promise<IndexServerProps> {
  const offers = await getOffers({ page: 1, pageSize: 9, filter: {} });
  const filters = await getFilters();

  return {
    props: {
      offers,
      filters,
    },
  };
}
