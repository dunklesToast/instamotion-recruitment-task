import type { CarBasicInfo } from '@type/Car.type';
import type { HTTPFilterBody } from '@type/Filter.type';

export async function makeRequest(page: number, filter: HTTPFilterBody): Promise<CarBasicInfo[]> {
  const body = {
    pageSize: 9,
    page,
    filter,
  };

  const results = await fetch(`/offers`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return results.json();
}
