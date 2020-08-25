import React from 'react';
import { Switch } from 'react-router';
import PrivateRoute from './PrivateRoute';
import Home from '../containers/Home';
const AppRoutes = ({ authAndUser }) => {
  console.log('AppRoutes', authAndUser);
  return (
    <Switch>
      <PrivateRoute
        exact
        authed={authAndUser}
        path='/dashboard'
        component={Home}
      />
    </Switch>
  );
};

export default AppRoutes;
