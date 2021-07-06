import React from 'react';
import { render, screen } from '@testing-library/react';
import { FilterBar } from './FilterBar';

test('Filter', () => {
  render(
    <FilterBar
      onSubmit={jest.fn}
      filters={{
        make: [],
        model: {
          test: [],
        },
        gearbox: [],
        carCondition: [],
        category: [],
        doors: [],
        emissionClass: [],
        exteriorColor: [],
        interiorColor: [],
        fuel: [],
        interiorType: [],
        climatisation: [],
        __typename: 'Filters',
      }}
    />
  );
  expect(screen.getByTestId('filterbar')).toBeInTheDocument();
  expect(screen.getByTestId('filterbar')).toMatchSnapshot();
});
