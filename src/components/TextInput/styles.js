import styled from 'styled-components';

export const InpuText = styled.input.attrs((props) => ({
  colorFocus: props.error ? '#FFCFC9' : props.colorFocus || '#FFD43B',
}))`
  width: 300px;
  height: 35px;
  outline: none;
  margin: 0;
  margin-left: 5px;
  padding: 6px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #808080;
  border-radius: 8px;
  &:hover,
  &:active,
  &:focus {
    border-color: ${(props) => props.colorFocus};
    box-shadow: 0 0 4px ${(props) => props.colorFocus};
  }
`;
export const LabelText = styled.label`
  color: #808080;
`;
