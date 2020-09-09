import React from 'react';
import PropTypes from 'prop-types';
import { TextareaInput, LabelText, InputContainer, SpanError } from './styles';

const TextArea = ({ label, id, rows, errorMessage, logical }) => {
  return (
    <InputContainer>
      <LabelText htmlFor={id}>{label}</LabelText>
      <TextareaInput rows={rows} {...logical}></TextareaInput>
      <SpanError>{errorMessage}</SpanError>
    </InputContainer>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  rows: PropTypes.number,
  errorMessage: PropTypes.string,
  logical: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
};

TextArea.defaultProps = {
  id: null,
  label: 'Textarea',
  rows: 5,
  errorMessage: '',
};

export default TextArea;
