import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './Routes';
import AppProviders from '../context/app-provider';
const App = () => {
  return (
    <HashRouter>
      <AppProviders>
        <Routes />
      </AppProviders>
    </HashRouter>
  );
};

export default App;
