import React from 'react';
import { Switch } from 'react-router';
import { useAuthState } from '../context/auth-context';
import LandingRoutes from './LandingRoutes';
import AppRoutes from './AppRoutes';
const Routes = () => {
  const { data } = useAuthState();
  return (
    <Switch>
      <AppRoutes authAndUser={data.user && data.status === 'success'} />
      <LandingRoutes />
    </Switch>
  );
};

export default Routes;
