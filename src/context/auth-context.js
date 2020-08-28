import React, { useState, useEffect } from 'react';
import * as auth from '../auth-provider';
import { useHistory } from 'react-router-dom';

const AuthContext = React.createContext();
export const AuthProvider = (props) => {
  let history = useHistory();
  const [data, setData] = useState({
    status: 'initial',
    error: null,
    user: null,
  });
  // make a login request
  const login = async (user, password) => {
    setData({
      status: 'pending',
      error: null,
      user: null,
    });
    // save the info on localStorage and get user
    try {
      const responseUser = await auth.login(user, password);
      if (responseUser.hasOwnProperty('data')) {
        setData({
          status: 'success',
          error: null,
          user: { ...responseUser.data },
        });
        history.push('/dashboard');
      } else {
        setData({
          status: 'error',
          error: null,
          user: null,
        });
      }
    } catch (err) {
      setData({ status: 'error', error: err, user: null });
    }
  };
  const register = () => {
    console.log('Register on Auth-Context');
  }; // register the user
  const logout = () => {
    // remove info on localStorage and clean the user
    auth.logout();
    setData({ status: 'initial', error: null, user: null });
    history.push('/');
  }; // clear the token in localStorage and the user data
  useEffect(() => {
    let token = auth.getToken();
    if (token) {
      const response = auth.userByToken(token);
      setData({ status: 'success', error: null, user: response });
    } else {
      setData({ status: 'initial', error: null, user: null });
    }
  }, []);
  // if (data.status === 'pending') {
  //   return <FullPageSpinner />;
  // }
  return (
    <AuthContext.Provider
      value={{ data, login, logout, register }}
      {...props}
    />
  );
};
export const useAuthState = () => React.useContext(AuthContext);
