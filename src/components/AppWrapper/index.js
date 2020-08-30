import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, WrapperContent, NavContainer, WrapperHeader } from './styles';
import { useUser } from '../../context/user-context';
import NavigationBar from '../NavigationBar';
import DashboardHeader from '../DashboardHeader';
const AppWrapper = ({ children }) => {
  // will use the geted by user organization;
  let user = useUser();
  return (
    <Wrapper>
      <NavContainer>
        <NavigationBar></NavigationBar>
      </NavContainer>
      <WrapperHeader>
        <DashboardHeader
          organization={{ name: `${user.first_name} ${user.last_name}` }}
        />
      </WrapperHeader>
      <WrapperContent>{children}</WrapperContent>
    </Wrapper>
  );
};
AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
