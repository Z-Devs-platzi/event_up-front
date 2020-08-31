import {
  LogingRequest,
  UserRequest,
  RegisterRequest,
} from './utility/enpoints/auth';
const localStorageKey = '__event_up_auth_provider_token__';

async function userByToken(token) {
  // TODO CHANGE USING https://reqres.in/
  let userInfo = await UserRequest({
    path: '',
    body: null,
    params: {},
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return userInfo;
}
function getToken() {
  return window.sessionStorage.getItem(localStorageKey);
}

function handleAuthResponse({ authToken }) {
  if (authToken) {
    window.sessionStorage.setItem(localStorageKey, authToken);
    return authToken;
  }
  throw new Error('No Auth Token');
}

async function login(email, password) {
  try {
    let loginRespone = await LogingRequest({
      path: '',
      body: {
        email,
        password,
      },
      params: {},
    });
    handleAuthResponse(loginRespone.data);
    return loginRespone;
  } catch (error) {
    throw error;
  }
}

async function register(data) {
  try {
    let registerResponse = await RegisterRequest({
      path: '',
      body: { ...data },
      params: {},
    });
    return registerResponse;
  } catch (err) {
    throw err;
  }
}

function logout() {
  window.sessionStorage.removeItem(localStorageKey);
}

export { getToken, login, register, logout, localStorageKey, userByToken };
