import React from 'react';
import PropTypes from 'prop-types';
import { InpuText, LabelText } from './styles';
const TextInput = ({ label, id, type, logical, placeholder, erro }) => {
  return (
    <>
      <LabelText htmlFor={id}>{label}</LabelText>
      <br />
      <InpuText
        error={erro}
        type={type}
        id={id}
        {...logical}
        placeholder={placeholder}
      />
    </>
  );
};

TextInput.defaultProps = {
  label: 'Input',
  placeholder: '',
  type: 'text',
  erro: false,
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  erro: PropTypes.bool,
  logical: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['password', 'email', 'text', 'url']),
};

export default TextInput;
