import React from 'react';
import Avatar from '../Avatar';
import PropTypes from 'prop-types';
import { HeaderWrapper, HeaderTitle } from './styles';

const DashboardHeader = ({ organization }) => {
  return (
    <HeaderWrapper>
      <Avatar src={organization.logo} />
      <HeaderTitle>{organization.name}</HeaderTitle>
    </HeaderWrapper>
  );
};

DashboardHeader.propTypes = {
  organization: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
  }),
};

DashboardHeader.defaultProps = {
  organization: {
    name: 'My Organization',
    logo:
      'https://images.unsplash.com/photo-1552928288-fb12b88744dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=909&q=80',
  },
};

export default DashboardHeader;
