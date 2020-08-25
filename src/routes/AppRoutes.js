import React from 'react';
import PrivateRoute from './PrivateRoute';
import Home from '../containers/Home';
import { withRouter } from 'react-router-dom';
const AppRoutes = ({ authAndUser }) => {
  console.log('AppRoutes', authAndUser);
  return (
    <>
      <PrivateRoute
        exact
        authed={authAndUser}
        path='/dashboard'
        component={Home}
      />
    </>
  );
};

export default withRouter(AppRoutes);
