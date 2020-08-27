import React from 'react';
import PropTypes from 'prop-types';
import { LogoContainer } from './styles';

const Logo = ({ imagePath, imageSize }) => {
  return <LogoContainer img={imagePath} size={imageSize} />;
};
Logo.propTypes = {
  imagePath: PropTypes.string,
  imageSize: PropTypes.number,
};

export default Logo;
