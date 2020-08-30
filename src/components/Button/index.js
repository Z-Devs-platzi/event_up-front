import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './styles';

const Button = ({ children, buttonType, onClick }) => (
  <Buttons buttonType={buttonType} onClick={onClick}>
    {children}
  </Buttons>
);

Button.defaultProps = {
  buttonType: 'primary',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(['primary', 'outline']),
};

export default Button;
