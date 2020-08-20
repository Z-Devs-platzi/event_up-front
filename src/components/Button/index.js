import React from 'react';
import PropTypes from 'prop-types';
import { ButtonS } from './styles';

const Button = ({ children, buttonType, onClick }) => (
  <ButtonS buttonType={buttonType} onClick={onClick}>
    {children}
  </ButtonS>
);

Button.defaultProps = {
  buttonType: 'primary',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
