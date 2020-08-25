import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthProvider } from './auth-context';
import { UserProvider } from './user-context';
function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  );
}
AppProviders.propTypes = {
  children: PropTypes.array,
};
export default withRouter(AppProviders);
