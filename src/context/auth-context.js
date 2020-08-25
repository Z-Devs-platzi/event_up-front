import React, { useState, useEffect } from 'react';
import * as auth from '../auth-provider';

const FullPageSpinner = () => <h1>LoaDING!!!</h1>;

const AuthContext = React.createContext();
export const AuthProvider = (props) => {
  const [data, setData] = useState({
    status: 'pending',
    error: null,
    user: null,
  });
  // make a login request
  const login = async (user, password) => {
    // save the info on localStorage and get user
    const responseUser = await auth.login(user, password);
    if (responseUser) {
      setData({ status: 'success', error: null, user: responseUser });
    } else {
      setData({ status: 'error', error: responseUser, user: null });
    }
  };
  const register = () => {}; // register the user
  const logout = () => {
    // remove info on localStorage and clean the user
    auth.logout();
    setData({ status: 'success', error: null, user: null });
  }; // clear the token in localStorage and the user data
  useEffect(() => {
    let token = auth.getToken();
    if (token) {
      const response = auth.userByToken(token);
      setData({ status: 'success', error: null, user: response });
    } else {
      setData({ status: 'success', error: null, user: null });
    }
  }, []);

  if (data.status === 'pending') {
    return <FullPageSpinner />;
  }
  return (
    <AuthContext.Provider
      value={{ data, login, logout, register }}
      {...props}
    />
  );
};
export const useAuthState = () => React.useContext(AuthContext);
