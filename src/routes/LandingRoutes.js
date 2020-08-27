import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SingIn from '../containers/SingIn';
import Button from '../components/Button';

const Landing = () => {
  return (
    <>
      <h1>Landing</h1>

      <Link to='/signin'>
        <Button buttonType={'primary'}>Sign In</Button>
      </Link>
      <Link to='/signup'>
        <Button buttonType={'primary'}>Sign Up</Button>
      </Link>
    </>
  );
};
const Register = () => <h1>Register</h1>;
const LandingRoutes = () => (
  <>
    <Route path='/' exact component={Landing} />
    <Route path='/signin' exact component={SingIn} />
    <Route path='/signup' exact component={Register} />
  </>
);
export default withRouter(LandingRoutes);
