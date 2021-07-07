import type { FormikFilters, HTTPFilterBody } from '@type/Filter.type';

/**
 * This function generates the filter for GQL. It's a bit ugly since I do not know how exactly the filtering
 * works and if I can send undefined values.
 *
 * @param filters
 */
export function buildFilters(filters: FormikFilters): {
  generatedFilters: HTTPFilterBody;
  queryParams: Record<string, string>;
} {
  const generatedFilters: HTTPFilterBody = {};
  const queryParams: Record<string, string> = {};

  if (filters.make) {
    generatedFilters['make-model'] = filters.make;
    queryParams.make = filters.make;
  }

  if (filters.model) {
    generatedFilters['make-model'] = `${filters.make}:${filters.model}`;
    queryParams.model = filters.model;
  }

  if (filters.category) {
    generatedFilters.category = filters.category;
    queryParams.category = filters.category;
  }

  if (filters.exteriorColor) {
    generatedFilters.exteriorColor = filters.exteriorColor;
    queryParams.exteriorColor = filters.exteriorColor;
  }

  if (filters.fuel) {
    generatedFilters.fuel = filters.fuel;
    queryParams.fuel = filters.fuel;
  }

  if (filters.gearbox) {
    generatedFilters.gearbox = filters.gearbox;
    queryParams.gearbox = filters.gearbox;
  }

  if (filters.mileage.from || filters.mileage.to) {
    generatedFilters.mileage = `["${filters.mileage.from || ''}", "${filters.mileage.to || ''}"]`;
    if (filters.mileage.from) {
      queryParams.mileAgeFrom = filters.mileage.from;
    }
    if (filters.mileage.to) {
      queryParams.mileAgeTo = filters.mileage.to;
    }
  }

  if (filters.power.from || filters.power.to) {
    generatedFilters.power = `["${filters.power.from || ''}", "${filters.power.to || ''}"]`;
    if (filters.power.from) {
      queryParams.powerFrom = filters.power.from;
    }
    if (filters.power.to) {
      queryParams.powerTo = filters.power.to;
    }
  }

  if (filters.price.from || filters.price.to) {
    generatedFilters.price = `["${filters.price.from || ''}", "${filters.price.to || ''}"]`;
    if (filters.price.from) {
      queryParams.priceFrom = filters.price.from;
    }
    if (filters.price.to) {
      queryParams.priceTo = filters.price.to;
    }
  }

  return {
    generatedFilters,
    queryParams,
  };
}
