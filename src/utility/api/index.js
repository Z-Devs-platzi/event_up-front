import { API_URL } from '../api';
import axios from 'axios';

const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

export default API;
