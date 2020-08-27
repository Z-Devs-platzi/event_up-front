import styled from 'styled-components';

export const InpuText = styled.input.attrs((props) => ({
  colorFocus: props.error
    ? 'var(--error)'
    : props.colorFocus || 'var(--secondary-color)',
}))`
  width: 300px;
  height: 35px;
  outline: none;
  margin-top: 5px;
  padding: 6px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: var(--white);
  border: 1px solid var(--grey);
  border-radius: 8px;
  &:hover,
  &:active,
  &:focus {
    border-color: ${(props) => props.colorFocus};
    box-shadow: 0 0 4px ${(props) => props.colorFocus};
  }
`;
export const LabelText = styled.label`
  color: var(--grey);
`;
