import React from 'react';
import PropTypes from 'prop-types';

import { LandingContent, LandingP } from './styles';
import { CenterDiv } from '../../styles/GlobalStyles';
import Logo from '../Logo';
const LandingWraper = ({ children }) => {
  return (
    <LandingContent>
      <CenterDiv>
        <Logo />
        <LandingP>
          The place where you can create <br />
          and manage all your <br /> organization events
        </LandingP>
        {children}
      </CenterDiv>
    </LandingContent>
  );
};
LandingWraper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingWraper;
