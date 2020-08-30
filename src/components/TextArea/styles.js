import styled from 'styled-components';

export const LabelText = styled.label`
  color: var(--grey);
  margin-bottom: 0.625rem;
`;

export const TexareaInput = styled.textarea`
  border: 1px solid var(--grey);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-family: inherit;
  background-color: transparent;
`;

export const SpanError = styled.span`
  display: block;
  height: 20px;
  color: var(--error);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
