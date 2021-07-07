import React, { useEffect, useState } from 'react';
import { Text } from '@atoms/Text/Text';
import { FilterBar } from '@templates/Filter/FilterBar';
import { makeRequest } from '@templates/IndexLayout/IndexLayout.helpers';
import type { CarBasicInfo } from '@type/Car.type';
import type { HTTPFilterBody } from '@type/Filter.type';
import type { IndexServerProps } from '../../../pages';
import * as S from './IndexLayout.styled';

/**
 * The Index Page Layout
 */
export function IndexLayout({ offers, filters }: IndexServerProps['props']): JSX.Element {
  const [sOffers, setSOffers] = useState<CarBasicInfo[]>(offers);
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState<HTTPFilterBody>({});

  /** Intersection Observer and Infinite Scroll Logic */
  useEffect(() => {
    const lastTile = document.getElementById('last-tile');
    const observer = new IntersectionObserver(async (entries) => {
      const firstEntry = entries[0];
      if (firstEntry.isIntersecting) {
        if (isLoading || !hasMore) {
          return;
        }
        if (lastTile) {
          observer.unobserve(lastTile);
        }
        setLoading(true);

        const result = await makeRequest(page + 1, filter);

        if (result.length === 0) {
          setHasMore(false);
          if (lastTile) {
            observer.unobserve(lastTile);
          }
        }

        setSOffers((s) => s.concat(result));
        setLoading(false);
        setPage(page + 1);
      }
    });

    if (lastTile) {
      observer.observe(lastTile);
    }

    return () => {
      if (lastTile) {
        observer.unobserve(lastTile);
      }
    };
  }, [filter, isLoading, page, hasMore]);

  const handleFilter = (selectedFilters: HTTPFilterBody) => {
    setLoading(true);
    setPage(1);
    setFilter(selectedFilters);

    makeRequest(1, selectedFilters).then((result) => {
      setSOffers(result);
      setLoading(false);
    });
  };

  return (
    <S.IndexLayout>
      <S.FilterContainer>
        <FilterBar
          filters={filters}
          onSubmit={(selectedFilters) => handleFilter(selectedFilters)}
        />
      </S.FilterContainer>
      <S.ResultsContainer>
        {sOffers.map((offer, idx) => {
          const isLastElement = idx === sOffers.length - 1;

          return <S.Result car={offer} key={idx} id={isLastElement ? 'last-tile' : null} />;
        })}
        {sOffers.length !== 0 && isLoading && (
          <S.LoadingContainer>
            <Text>Lade weitere Treffer...</Text>
          </S.LoadingContainer>
        )}
        {sOffers.length === 0 && !isLoading && (
          <S.LoadingContainer>
            <Text>Keine Fahrzeuge mit deinen Filtern gefunden...</Text>
          </S.LoadingContainer>
        )}
      </S.ResultsContainer>
    </S.IndexLayout>
  );
}
