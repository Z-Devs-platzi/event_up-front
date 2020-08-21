import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import { API } from '../utility/api';

API();
const App = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route exact path='/' component={() => <h1>HOME</h1>} />
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
