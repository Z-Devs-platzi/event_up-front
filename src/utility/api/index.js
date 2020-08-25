import { API_URL } from '../consts';
import axios from 'axios';

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});
export const BaseGenpoint = (base, verb) => ({
  path = '',
  body = null,
  params,
}) =>
  API[verb](`${base}/${path}`, body, { params })
    .then((response) => response.data)
    .catch((error) => error);

export default API;
