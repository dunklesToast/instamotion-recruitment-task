import type { FormikFilters, QueryFilters } from '@type/Filter.type';

export function queryFilterToFormikFilter(filter: QueryFilters): FormikFilters {
  const result: FormikFilters = {
    make: filter.make,
    model: filter.model,
    category: filter.category,
    gearbox: filter.gearbox,
    fuel: filter.fuel,
    exteriorColor: filter.exteriorColor,
    mileage: {
      to: filter.mileAgeTo || '',
      from: filter.mileAgeFrom || '',
    },
    price: {
      to: filter.priceTo || '',
      from: filter.priceFrom || '',
    },
    power: {
      to: filter.powerTo || '',
      from: filter.powerFrom || '',
    },
  };

  Object.keys(result).forEach((key) => (result[key] === undefined ? delete result[key] : {}));

  return result;
}
