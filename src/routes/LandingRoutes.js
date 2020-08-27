import React from 'react';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom';
import Landing from '../containers/Landing';
import SingIn from '../containers/SingIn';

const Register = () => <h1>Register</h1>;
const LandingRoutes = () => (
  <>
    <Route path='/' exact component={Landing} />
    <Route path='/signin' exact component={SingIn} />
    <Route path='/signup' exact component={Register} />
  </>
);
export default withRouter(LandingRoutes);
