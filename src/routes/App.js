import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from '../containers/Home';
import { GlobalStyle } from '../styles/GlobalStyles';
import '../styles/fonts.css';

const App = () => (
  <HashRouter basename='/'>
    <GlobalStyle />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route
        component={() => (
          <h1>
            404 <br /> Woops{' '}
          </h1>
        )}
      />
    </Switch>
  </HashRouter>
);

export default App;
