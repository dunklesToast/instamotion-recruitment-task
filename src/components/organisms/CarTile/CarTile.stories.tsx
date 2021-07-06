import React from 'react';
import type { Meta, Story } from '@storybook/react';
import type { CarTileProps } from './CarTile';
import { CarTile } from './CarTile';

export default {
  title: 'Organisms/CarTile',
  component: CarTile,
} as Meta;

const CarTileComponent: Story<CarTileProps> = (args) => (
  <div style={{ maxWidth: 400 }}>
    <CarTile {...args} />
  </div>
);

export const Default = CarTileComponent.bind({});
Default.args = {
  car: {
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
  },
};

Default.parameters = {
  backgrounds: { default: 'dark' },
};
