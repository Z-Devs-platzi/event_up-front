import React from 'react';
import PropTypes from 'prop-types';
import { InpuText, LabelText } from './styles';
const TextInput = ({ label, id, type, logical, placeholder }) => {
  return (
    <>
      <LabelText htmlFor={id}>{label}</LabelText>
      <br />
      <InpuText type={type} id={id} {...logical} placeholder={placeholder} />
    </>
  );
};

TextInput.defaultProps = {
  label: 'Input',
  placeholder: 'Input',
  type: 'text',
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  logical: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['password', 'email', 'text', 'url']),
};

export default TextInput;
