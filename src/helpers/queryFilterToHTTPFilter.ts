import type { HTTPFilterBody, QueryFilters } from '@type/Filter.type';

export function queryFilterToHTTPFilter(filter: QueryFilters): HTTPFilterBody {
  const result: HTTPFilterBody = {
    'make-model': filter.make ? filter.make + (filter.model ? `:${filter.model}` : '') : undefined,
    category: filter.category,
    gearbox: filter.gearbox,
    fuel: filter.fuel,
    exteriorColor: filter.exteriorColor,
  };

  if (filter.mileAgeFrom || filter.mileAgeTo) {
    result.mileage = `["${filter.mileAgeFrom || ''}", "${filter.mileAgeTo || ''}"]`;
  }

  if (filter.powerFrom || filter.powerTo) {
    result.power = `["${filter.powerFrom || ''}", "${filter.powerTo || ''}"]`;
  }

  if (filter.priceFrom || filter.priceTo) {
    result.price = `["${filter.priceFrom || ''}", "${filter.priceTo || ''}"]`;
  }

  // Remove undefined values
  Object.keys(result).forEach((key) => (result[key] === undefined ? delete result[key] : {}));

  return result;
}
