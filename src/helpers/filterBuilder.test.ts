import { buildFilters } from '@helpers/filterBuilder';
import type { FormikFilters } from '@type/Filter.type';

const basicFilter: FormikFilters = {
  mileage: {
    from: '',
    to: '',
  },
  power: {
    from: '',
    to: '',
  },
  price: {
    from: '',
    to: '',
  },
};

const fullFilter: FormikFilters = {
  category: 'AUTOMATIC_GEAR',
  exteriorColor: 'BLACK',
  fuel: 'ELECTRICITY',
  make: 'Opel',
  model: 'Adam',
  gearbox: 'AUTOMATIC',
  mileage: {
    from: '5',
    to: '10',
  },
  power: {
    from: '5',
    to: '10',
  },
  price: {
    from: '5',
    to: '10',
  },
};

test('FilterBuilder', () => {
  expect(buildFilters(basicFilter)).toMatchSnapshot();
  expect(buildFilters(fullFilter)).toMatchSnapshot();
});
