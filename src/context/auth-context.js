import React, { useState, useEffect } from 'react';
// import * as auth from '../auth-provider';

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
const getUser = () => sleep(1000).then(() => ({ userName: 'elmo' })); //.then(() => null);
const FullPageSpinner = () => <h1>LoaDING!!!</h1>;

const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    status: 'pending',
    error: null,
    user: null,
  });
  useEffect(() => {
    getUser().then(
      (user) => setState({ status: 'success', error: null, user }),
      (error) => setState({ status: 'error', error, user: null })
    );
  }, []);

  return (
    <AuthContext.Provider value={state}>
      {state.status === 'pending' ? (
        <FullPageSpinner></FullPageSpinner>
      ) : state === 'error' ? (
        <div>
          <h2>UPS ERROR</h2>
          <pre>{state.error.message}</pre>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
export const useAuthState = () => React.useContext(AuthContext);
