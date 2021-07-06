import type { FormikFilters, HTTPFilterBody } from '@type/Filter.type';

/**
 * This function generates the filter for GQL. It's a bit ugly since I do not know how exactly the filtering
 * works and if I can send undefined values.
 *
 * @param filters
 */
export function buildFilters(filters: FormikFilters): HTTPFilterBody {
  const generatedFilters: HTTPFilterBody = {};

  if (filters.make) {
    generatedFilters['make-model'] = filters.make;
  }

  if (filters.model) {
    generatedFilters['make-model'] = `${filters.make}:${filters.model}`;
  }

  if (filters.category) {
    generatedFilters.category = filters.category;
  }

  if (filters.exteriorColor) {
    generatedFilters.exteriorColor = filters.exteriorColor;
  }

  if (filters.fuel) {
    generatedFilters.fuel = filters.fuel;
  }

  if (filters.gearbox) {
    generatedFilters.gearbox = filters.gearbox;
  }

  if (filters.mileage.from || filters.mileage.to) {
    generatedFilters.mileage = `["${filters.mileage.from}", "${filters.mileage.to}"]`;
  }

  if (filters.power.from || filters.power.to) {
    generatedFilters.power = `["${filters.power.from}", "${filters.power.to}"]`;
  }

  if (filters.price.from || filters.price.to) {
    generatedFilters.price = `["${filters.price.from}", "${filters.price.to}"]`;
  }

  return generatedFilters;
}
