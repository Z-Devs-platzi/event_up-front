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

function register({ username, password }) {
  // TODO CHANGE USING https://reqres.in/
  return RegisterRequest({
    path: '',
    body: {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    },
    params: {
      delay: 3,
    },
  }).then(handleAuthResponse);
}

function logout() {
  window.sessionStorage.removeItem(localStorageKey);
}

export { getToken, login, register, logout, localStorageKey, userByToken };
