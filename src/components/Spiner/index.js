import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import bxLoaderAlt from '@iconify/icons-bx/bx-loader-alt';

import { SpinerContainer } from './styles';
const Spiner = ({ size, color }) => (
  <SpinerContainer color={color} size={size}>
    <Icon icon={bxLoaderAlt} />
  </SpinerContainer>
);

Spiner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
export default Spiner;
