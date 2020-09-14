import { API_URL } from '../consts';
import axios from 'axios';
const DEFAULT_HEADER = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Content-Type': 'application/json',
};
const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  mode: 'cors',
  header: DEFAULT_HEADER,
});
export const BaseGendpoint = (
  base,
  verb,
  headers = { header: DEFAULT_HEADER }
) => ({ path = '', body = null, params, headers }) => {
  if (verb !== 'get') {
    return API[verb](`${base}/${path}`, body, {
      params,
      headers,
    })
      .then((response) => response.data)
      .catch(HandlerError);
  }
  return API[verb](`${base}/${path}`, {
    params,
    headers,
  })
    .then((response) => response.data)
    .catch(HandlerError);
};
const HandlerError = (err) => {
  let { data } = err.response;
  console.error(data.message);
  throw new Error(data.message);
};
export default API;
