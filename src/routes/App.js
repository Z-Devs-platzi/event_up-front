import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { Switch } from 'react-router';
import AppProviders from '../context/app-provider';
const App = () => {
  return (
    <Router>
      <AppProviders>
        <Switch>
          <Routes />
        </Switch>
      </AppProviders>
    </Router>
  );
};

export default App;
