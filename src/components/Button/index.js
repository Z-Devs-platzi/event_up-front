import React from 'react';
import PropTypes from 'prop-types';
import { InlineIcon } from '@iconify/react';
import { Buttons } from './styles';

const Button = ({ children, buttonType, onClick, icon, iconSmall }) => (
  <Buttons buttonType={buttonType} onClick={onClick}>
    {children}
    {icon ? (
      <InlineIcon icon={icon} />
    ) : iconSmall ? (
      <InlineIcon icon={iconSmall} />
    ) : (
      ''
    )}
  </Buttons>
);

Button.defaultProps = {
  buttonType: 'primary',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'action']),
};

export default Button;
