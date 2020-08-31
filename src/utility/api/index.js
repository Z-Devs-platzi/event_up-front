import { API_URL } from '../consts';
import axios from 'axios';

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  mode: 'cors',
  header: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
  },
});
export const BaseGendpoint = (
  base,
  verb,
  conent_type = 'application/json'
) => ({ path = '', body = null, params }) =>
  API[verb](`${base}/${path}`, body, {
    params,
    header: { 'Content-Type': conent_type },
  })
    .then((response) => response.data)
    .catch(HandlerError);

const HandlerError = (err) => {
  let { data } = err.response;
  throw new Error(data.message);
};
export default API;
