import React from 'react';
import { render, screen } from '@testing-library/react';
import offer from '../../../mockdata/offers.json';
import { OfferTemplate } from './OfferTemplate';

test('OfferTemplate', () => {
  render(<OfferTemplate offer={offer} />);
  expect(screen.getByTestId('offerlayout')).toBeInTheDocument();
  expect(screen.getByTestId('offerlayout')).toMatchSnapshot();
});
