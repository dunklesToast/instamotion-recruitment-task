import React from 'react';
import { getFilters } from '@helpers/api/getFilters';
import { getOffers } from '@helpers/api/getOffers';
import { IndexLayout } from '@templates/IndexLayout/IndexLayout';
import type { CarBasicInfo } from '@type/Car.type';
import type { Filters } from '@type/Filter.type';
import Head from 'next/head';

export type IndexServerProps = {
  props: {
    offers: CarBasicInfo[];
    filters: Filters;
  };
};

export default function Index({ offers, filters }: IndexServerProps['props']): JSX.Element {
  return (
    <>
      <Head>
        <title>FooCar | Deine Anlaufstelle für Autos</title>
        <meta property='og:title' content='FooCar | Deine Anlaufstelle für Autos' />
      </Head>
      <IndexLayout offers={offers} filters={filters} />;
    </>
  );
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
