import React from 'react';
import { render, screen } from '@testing-library/react';
import { RangeSelect } from './RangeSelect';

test('RangeSelect', () => {
  render(<RangeSelect onChange={jest.fn} start='5' end='10' name='Test' />);

  const element = () => screen.getByTestId('range-select');

  expect(element()).toBeInTheDocument();
  expect(element()).toMatchSnapshot();
});
