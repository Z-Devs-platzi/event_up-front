import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, WrapperContent, NavContainer, WrapperHeader } from './styles';
import NavigationBar from '../NavigationBar';
import DashboardHeader from '../DashboardHeader';
const AppWrapper = ({ children }) => {
  // will use the geted by user organization;
  return (
    <Wrapper>
      <NavContainer>
        <NavigationBar></NavigationBar>
      </NavContainer>
      <WrapperHeader>
        <DashboardHeader />
      </WrapperHeader>
      <WrapperContent>{children}</WrapperContent>
    </Wrapper>
  );
};
AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppWrapper;
