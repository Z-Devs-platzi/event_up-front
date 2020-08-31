import React from 'react';
import PropTypes from 'prop-types';
import EventUplogo from '../../../assets/event_up_logo.svg';
import { FooterWrapper, LogoContainer, Logo } from './styles';

const TemplateFooter = ({ theme }) => {
  return (
    <FooterWrapper>
      <LogoContainer>
        Power by
        <Logo src={EventUplogo} alt='Eventp Logo' />
      </LogoContainer>
    </FooterWrapper>
  );
};

TemplateFooter.propTypes = {
  theme: PropTypes.objectOf({
    font: PropTypes.string,
    primary: PropTypes.string,
    secondary: PropTypes.string,
    compA: PropTypes.string,
    compB: PropTypes.string,
  }),
};

export default TemplateFooter;
