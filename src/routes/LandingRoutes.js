import React from 'react';
import { Route } from 'react-router';
import { useAuthState } from '../context/auth-context';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <>
      <h1>Landing</h1>
      <Link to='/login'>loging</Link>
    </>
  );
};
const Register = () => <h1>Register</h1>;
const Login = () => {
  let { login, data } = useAuthState();
  console.log('ROUTES LANDING', data.user);
  return (
    <>
      <h1>LOGIN</h1>
      <button onClick={() => login({ username: 'wolftrax', password: '124' })}>
        Login
      </button>
    </>
  );
};
const LandingRoutes = () => (
  <>
    <Route path='/' exact component={Landing} />
    <Route path='/login' exact component={Login} />
    <Route path='/register' exact component={Register} />
    <Route component={() => <h4>404</h4>} />
  </>
);
export default LandingRoutes;
