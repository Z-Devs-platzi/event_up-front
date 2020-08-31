import React from 'react';

import PropTypes from 'prop-types';

const FileInput = ({ label, logical, ...rest }) => (
  <div>
    <label>{label}</label>
    <input {...rest} type='file' onChange={logical.onChange} />
  </div>
);
FileInput.defaultProps = {
  label: 'Input',
};

FileInput.propTypes = {
  label: PropTypes.string,
  logical: PropTypes.shape({
    value: PropTypes.instanceOf(File),
    onChange: PropTypes.func,
  }).isRequired,
};
export default FileInput;
