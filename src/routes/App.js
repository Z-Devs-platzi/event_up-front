import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { useAuthState } from '../context/auth-context';
import Home from '../containers/Home';

const Landing = () => <h1>Landing</h1>;
const Register = () => <h1>Register</h1>;
const Login = () => <h1>LOGIN</h1>;
const App = () => {
  const { status } = useAuthState();
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />

        <PrivateRoute
          authed={status === 'success'}
          path='/dashboard'
          component={Home}
        />

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
};

export default App;
