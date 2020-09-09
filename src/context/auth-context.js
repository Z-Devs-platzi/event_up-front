import React, { useState, useEffect } from 'react';
import * as auth from '../auth-provider';
import { useHistory } from 'react-router-dom';
import Spiner from '../components/Spiner';
import { CenterDiv } from '../styles/GlobalStyles';

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
    try {
      const responseUser = await auth.login(user, password);
      if (responseUser.hasOwnProperty('data') && responseUser.status) {
        setData({
          status: 'success',
          error: null,
          user: { ...responseUser.data.user },
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
  const register = async (registerParams) => {
    setData({
      status: 'pending',
      error: null,
      user: null,
    });
    try {
      const responseRegister = await auth.register(registerParams);
      setData({
        status: 'success',
        error: null,
        user: null,
      });
      // DISPATCH MESSAGE SUCCES Revirew email
      console.log(
        '%c Check your email',
        'background-color: green; color:white;',
        responseRegister.data.email
      );
      history.push('/dashboard');
    } catch (err) {
      console.log('%c Error on', err);
      setData({ status: 'error', error: err, user: null });
    }
  }; // register the user
  const logout = () => {
    // remove info on localStorage and clean the user
    auth.logout();
    setData({ status: 'initial', error: null, user: null });
    history.push('/');
  }; // clear the token in localStorage and the user data
  useEffect(() => {
    async function fetchData(token) {
      const response = await auth.userByToken(token);
      console.log('Auth provider', response);
      setData({ status: 'success', error: null, user: response.data });
      history.push('/dashboard');
    }
    let token = auth.getToken();
    if (token) {
      fetchData(token);
    } else {
      setData({ status: 'initial', error: null, user: null });
    }
    // eslint-disable-next-line
  }, []);

  if (data.status === 'pending') {
    return (
      <CenterDiv>
        <Spiner color={'#ffd43b'} size={100} />
      </CenterDiv>
    );
  }
  return (
    <AuthContext.Provider
      value={{ data, login, logout, register }}
      {...props}
    />
  );
};
export const useAuthState = () => React.useContext(AuthContext);
