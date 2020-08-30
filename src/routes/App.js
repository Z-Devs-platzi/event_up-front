import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router';

import AppProviders from '../context/app-provider';
import Routes from './Routes';
import { GlobalStyle } from '../styles/GlobalStyles';
import '../styles/fonts.css';
const App = () => {
  return (
    <Router>
      <AppProviders>
        <GlobalStyle />
        <Switch>
          <Routes />
        </Switch>
      </AppProviders>
    </Router>
  );
};

export default App;
