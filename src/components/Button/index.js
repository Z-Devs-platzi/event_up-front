import React from 'react';
import PropTypes from 'prop-types';
import { InlineIcon } from '@iconify/react';
import { Buttons } from './styles';

const Button = ({ children, buttonType, onClick, icon }) => (
  <Buttons buttonType={buttonType} onClick={onClick}>
    {children}
    {icon && <InlineIcon icon={icon} />}
  </Buttons>
);

Button.defaultProps = {
  buttonType: 'primary',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node,
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'action']),
};

export default Button;
