import React from 'react';
import { useAuthState } from './auth-context';
const UserContext = React.createContext();

export const UserProvider = (props) => (
  <UserContext.Provider value={useAuthState().data.user} {...props} />
);

export const useUser = () => React.useContext(UserContext);
