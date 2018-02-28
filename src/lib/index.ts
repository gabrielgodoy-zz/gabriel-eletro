import * as qs from 'querystring';

export const isomorphicQuery = (query) =>
  Object.keys(query).length === 0 && typeof window !== 'undefined'
    ? qs.parse(location.search.slice(1))
    : query;

export function cleanObject(object: object, valueKeeper?: any) {
  return Object.entries(object).reduce((ret, [key, value]) => {
    if (value === undefined || value === null) {
      if (typeof valueKeeper !== 'undefined') {
        ret[key] = valueKeeper;
      }
      return ret;
    }

    ret[key] = !Array.isArray(value) && typeof value === 'object' ? cleanObject(value) : value;

    return ret;
  }, {});
}
