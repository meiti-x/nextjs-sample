import qs from 'querystring';

export function addParamsToURL(URL: string, params: { [k: string]: any }) {
  return `${URL}?${qs.stringify(params)}`;
}
