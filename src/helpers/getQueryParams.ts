import type { NextApiRequest } from 'next';

/**
 * Next.js has no great QueryParam Parsing so we do it ourself (so its typescript conform).
 * @param query - The Nextjs query
 */
export function getQueryParams(query: NextApiRequest['query']): Record<string, string> {
  const keys = Object.keys(query);
  const result: Record<string, string> = {};
  keys.forEach((key) => {
    const value = query[key];
    if (typeof value === 'object') {
      [result[key]] = value;
    } else {
      result[key] = value;
    }
  });

  return result;
}
