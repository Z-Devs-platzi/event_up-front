import API from '../api';
export const emailPassword = (email, password) =>
  API.post('auth/password', null, {
    params: {
      email,
      password,
    },
  })
    .then((response) => response.data)
    .catch((error) => error.response.status);
