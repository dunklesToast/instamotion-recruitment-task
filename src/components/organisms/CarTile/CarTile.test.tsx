import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarTile } from './CarTile';

const car = {
  image:
    'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/4f066a2ceccb40b1ccbb533254e1b68b/image_01.jpg',
  make: 'Volkswagen',
  model: 'up!',
  mileage: 61834,
  firstRegistration: '05.2017',
  fuel: 'PETROL',
  exteriorColor: 'WHITE',
  offerID: 'non-existend',
  consumptionCombined: 4.4,
  power: 44,
  co2: 104,
  price: 6722,
  monthlyInstallment: 40,
  images: ['someimage'],
  variant: 'up! 1.0 move up! Klima PDC Einparkhilfe',
};

test('CarTile', () => {
  render(<CarTile car={car} />);
  expect(screen.getByTestId('cartile')).toBeInTheDocument();
  expect(screen.getByTestId('cartile')).toMatchSnapshot();
});
