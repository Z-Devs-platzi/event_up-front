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

async function register(data) {
  // TODO CHANGE USING https://reqres.in/
  console.log('register', data);
  try {
    let registerResponse = await RegisterRequest({
      path: '',
      body: { ...data },
      params: {},
    });
    console.log('Auth Provider register', registerResponse);
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
