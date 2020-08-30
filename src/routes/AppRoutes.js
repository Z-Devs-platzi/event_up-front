import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppWrapper from '../components/AppWrapper';
import Home from '../containers/Home';
import PrivateRoute from './PrivateRoute';

const events = () => (
  <AppWrapper>
    <h3>EVETNS</h3>
  </AppWrapper>
);
const staff = () => (
  <AppWrapper>
    <h3>Staff</h3>
  </AppWrapper>
);
const orgs = () => (
  <AppWrapper>
    <h3>Organizations</h3>
  </AppWrapper>
);
const AppRoutes = ({ authAndUser }) => {
  return (
    <>
      <PrivateRoute
        exact
        authed={authAndUser}
        path='/dashboard'
        component={Home}
      />
      <PrivateRoute
        exact
        authed={authAndUser}
        path='/events'
        component={events}
      />
      <PrivateRoute
        exact
        authed={authAndUser}
        path='/staff'
        component={staff}
      />
      <PrivateRoute
        exact
        authed={authAndUser}
        path='/organization'
        component={orgs}
      />
    </>
  );
};

AppRoutes.propTypes = {
  authAndUser: PropTypes.bool,
};
export default withRouter(AppRoutes);
