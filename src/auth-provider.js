import sha1 from 'js-sha1';
import {
  LogingRequest,
  UserRequest,
  RegisterRequest,
} from './utility/enpoints/auth';
const localStorageKey = '__event_up_auth_provider_token__';

async function userByToken(token) {
  // TODO CHANGE USING https://reqres.in/
  let userInfo = await UserRequest({
    path: '1',
    body: null,
    params: {
      delay: 2,
    },
  });
  return userInfo;
}
function getToken() {
  return window.sessionStorage.getItem(localStorageKey);
}

function handleAuthResponse({ token }) {
  if (token) {
    window.sessionStorage.setItem(localStorageKey, token);
    return token;
  }
  throw new Error('No Auth Token');
}
function handleAuthError(err) {
  console.error('handleAuthError', err);
}

async function login(email, password) {
  // TODO CHANGE USING https://reqres.in/
  console.log('sha PW', sha1(password));
  // TODO Pass sha1 password
  try {
    let loginRespone = await LogingRequest({
      path: '',
      body: {
        email,
        password,
      },
      params: {
        delay: 2,
      },
    });
    handleAuthResponse(loginRespone);
    let userInfo = await UserRequest({
      path: '1',
      body: null,
      params: {
        delay: 3,
      },
    });
    return userInfo;
  } catch (error) {
    handleAuthError(error);
    throw error;
  }
}

async function register({ email, password }) {
  // TODO CHANGE USING https://reqres.in/
  console.log('sha PW', sha1(password));
  // TODO Pass sha1 password
  try {
    let registerResponse = await RegisterRequest({
      path: '',
      body: {
        email,
        password,
      },
      params: {
        delay: 3,
      },
    }).then(async (request) => {
      let user = await UserRequest({
        path: '1',
        body: null,
        params: {
          delay: 3,
        },
      });
      return { ...request, user: { ...user.data } };
    });
    handleAuthResponse(registerResponse);
    return registerResponse;
  } catch (err) {
    handleAuthError(err);
    throw err;
  }
}

function logout() {
  window.sessionStorage.removeItem(localStorageKey);
}

export { getToken, login, register, logout, localStorageKey, userByToken };
