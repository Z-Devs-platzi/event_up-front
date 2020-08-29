import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StatusTag } from './styles';

const Tag = ({ status }) => {
  return <StatusTag status={status}>{status}</StatusTag>;
};

Tag.propTypes = {
  status: PropTypes.oneOf(['draft', 'published', 'finished']),
};

Tag.defaultProps = {
  status: 'draft',
};

export default Tag;
