import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from '../containers/Home';
const App = () => (
  <HashRouter basename='/'>
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
