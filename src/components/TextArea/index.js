import React from 'react';
import PropTypes from 'prop-types';
import { TextareaInput, LabelText, InputContainer, SpanError } from './styles';

const TextArea = ({ label, id, rows, errorMessage }) => {
  return (
    <InputContainer>
      <LabelText htmlFor={id}>{label}</LabelText>
      <TextareaInput rows={rows}></TextareaInput>
      <SpanError>{errorMessage}</SpanError>
    </InputContainer>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  rows: PropTypes.number,
  errorMessage: PropTypes.string,
};

TextArea.defaultProps = {
  id: null,
  label: 'Textarea',
  rows: 5,
  errorMessage: 'Este campo es necesario',
};

export default TextArea;
