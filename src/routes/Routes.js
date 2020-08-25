import React from 'react';

import { useAuthState } from '../context/auth-context';
import LandingRoutes from './LandingRoutes';
import AppRoutes from './AppRoutes';
const Routes = () => {
  const { data } = useAuthState();
  return (
    <>
      <LandingRoutes />
      <AppRoutes authAndUser={data.user && data.status === 'success'} />
    </>
  );
};

export default Routes;
