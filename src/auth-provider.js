const localStorageKey = '__event_up_auth_provider_token__';
// Fake API;
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
const postAuth = () =>
  sleep(1000).then(() => ({ authToken: 'LDMFAOBGfogfgafsangokFASG"$"4' })); //.then(() => null);
const getUser = () => sleep(1000).then(() => ({ name: 'elmo', id: '1412' })); //.then(() => null);
// getUser().then(
//     (user) => setState({ status: 'success', error: null, user }),
//     (error) => setState({ status: 'error', error, user: null })
//   );

async function userByToken(token) {
  let userInfo = await getUser(token);
  return userInfo;
}
function getToken() {
  return window.sessionStorage.getItem(localStorageKey);
}

function handleAuthResponse({ authToken }) {
  window.sessionStorage.setItem(localStorageKey, authToken);
  return authToken;
}

async function login({ username, password }) {
  // TODO change here for the real method
  postAuth({ username, password }).then(handleAuthResponse);
  let userInfo = await getUser({ username, password });
  console.log('USER INFO', userInfo);
  return userInfo;
}

function register({ username, password }) {
  // TODO change here for the real method
  return postAuth({ username, password }).then(handleAuthResponse);
}

async function logout() {
  window.sessionStorage.removeItem(localStorageKey);
}
/**
const authURL = process.env.REACT_APP_API_URL;

async function client(endpoint, data) {
  const config = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  return window
    .fetch(`${authURL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}
 */

export { getToken, login, register, logout, localStorageKey, userByToken };
