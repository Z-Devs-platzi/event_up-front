import React from 'react';
import { withRouter } from 'react-router-dom';
import { AuthProvider } from './auth-context';
import { UserProvider } from './user-context';
function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}
export default withRouter(AppProviders);
