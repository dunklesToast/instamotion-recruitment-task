import React from 'react';
import { getFilters } from '@helpers/api/getFilters';
import { getOffers } from '@helpers/api/getOffers';
import { getQueryParams } from '@helpers/getQueryParams';
import { queryFilterToHTTPFilter } from '@helpers/queryFilterToHTTPFilter';
import { IndexLayout } from '@templates/IndexLayout/IndexLayout';
import type { CarBasicInfo } from '@type/Car.type';
import type { Filters } from '@type/Filter.type';
import type { NextPageContext } from 'next';
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
      <IndexLayout offers={offers} filters={filters} />
    </>
  );
}

export async function getServerSideProps({ query }: NextPageContext): Promise<IndexServerProps> {
  const prettyQuery = getQueryParams(query);
  const offers = await getOffers({
    page: 1,
    pageSize: 9,
    filter: queryFilterToHTTPFilter(prettyQuery),
  });
  const filters = await getFilters();

  return {
    props: {
      offers,
      filters,
    },
  };
}
