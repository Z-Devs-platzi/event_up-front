import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Home from '../containers/Home';
import PrivateRoute from './PrivateRoute';
const AppRoutes = ({ authAndUser }) => {
  return (
    <>
      <PrivateRoute
        exact
        authed={authAndUser}
        path='/dashboard'
        component={Home}
      />
    </>
  );
};

AppRoutes.propTypes = {
  authAndUser: PropTypes.bool,
};
export default withRouter(AppRoutes);
