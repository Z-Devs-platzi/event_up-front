import React from 'react';
import PropTypes from 'prop-types';
import { AvatarImage } from './Avatar.styles';

const Avatar = ({ size, src, alt }) => (
  <AvatarImage size={size} src={src} alt={alt} />
);

Avatar.propTypes = {
  size: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  size: '2.75rem',
  src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  alt: 'Avatar',
};

export default Avatar;
