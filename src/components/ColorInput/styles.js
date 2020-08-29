import styled from 'styled-components';
import { CenterDiv } from '../../styles/GlobalStyles';

export const InputSwatch = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background: '#fff';
  border-radius: 50%;
  border: 1px solid #808080;
  boxshadow: var(--shadow);
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin: 5px;
`;
export const InputPopOver = styled.div`
  position: absolute;
  top: 50px;
  left: 160px;
  z-index: 2;
`;
export const InputCover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;
export const InputColor = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const LabelInput = styled.label`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: var(--grey);
`;
export const ColorContainerInput = styled(CenterDiv)`
  width: 168px;
  height: 40px;
`;
