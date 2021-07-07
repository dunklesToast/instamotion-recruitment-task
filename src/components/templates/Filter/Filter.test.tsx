import React from 'react';
import * as filters from '@mockdata/filters.json';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { Filters } from '@type/Filter.type';
import { FilterBar } from './FilterBar';

test('Filter', async () => {
  const submitMock = jest.fn();
  const { asFragment } = render(
    <FilterBar onSubmit={submitMock} filters={filters as unknown as Filters} />
  );

  const initialFragment = asFragment();

  const getFilterBar = () => screen.getByTestId('filterbar');
  const getSelects = () => screen.getAllByRole('combobox');
  const getModelSelect = () => screen.queryByText('Modell auswählen');
  const getSubmitButton = () =>
    screen.getByRole('button', {
      name: /filter anwenden/i,
    });

  expect(getFilterBar()).toBeInTheDocument();
  expect(getFilterBar()).toMatchSnapshot();

  const [makeSelect] = getSelects();
  userEvent.selectOptions(makeSelect, 'ALPINA');

  await waitFor(() => {
    expect(submitMock).toHaveBeenCalledTimes(1);
    expect(getModelSelect()).toBeInTheDocument();
  });

  expect(initialFragment).toMatchDiffSnapshot(asFragment());
  await userEvent.click(getSubmitButton());

  await waitFor(() => {
    expect(submitMock).toHaveBeenCalledTimes(3);
  });
});
