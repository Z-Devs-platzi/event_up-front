import API from '../api';
export const SearchPeopleSW = ({ path = '', body = null, params }) =>
  API.get(`users/${path}`, body, { params })
    .then((response) => response.data)
    .catch((error) => error);
