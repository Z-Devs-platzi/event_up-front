import React from 'react';
import PropTypes from 'prop-types';
import { InpuText, LabelText, SpanError, InputContainer } from './styles';
const TextInput = ({ label, id, type, logical, placeholder, errorMessage }) => {
  return (
    <InputContainer>
      <LabelText htmlFor={id}>{label}</LabelText>
      <InpuText
        error={errorMessage}
        type={type}
        id={id}
        {...logical}
        placeholder={placeholder}
      />
      <SpanError>{errorMessage}</SpanError>
    </InputContainer>
  );
};

TextInput.defaultProps = {
  label: 'Input',
  placeholder: '',
  type: 'text',
  errorMessage: '',
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  logical: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['password', 'email', 'text', 'url']),
};

export default TextInput;
