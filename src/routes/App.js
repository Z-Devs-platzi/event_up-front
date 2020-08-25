import React from 'react';
import { HashRouter } from 'react-router-dom';
import { useAuthState } from '../context/auth-context';
import LandingRoutes from './LandingRoutes';
import AppRoutes from './AppRoutes';
const App = () => {
  const { data } = useAuthState();
  console.log('APP', data.user && data.status === 'success');
  return (
    <HashRouter>
      <AppRoutes authAndUser={data.user && data.status === 'success'} />
      <LandingRoutes />
    </HashRouter>
  );
};

export default App;
