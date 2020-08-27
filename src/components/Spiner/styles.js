import styled from 'styled-components';
import { Rotate360 } from '../../styles/animations';

export const SpinerContainer = styled.div.attrs((props) => ({
  size: props.size ? props.size : '20',
  color: props.color ? props.color : 'var(--grey)',
}))`
  ${Rotate360()}
  display: flex;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  font-size: ${(props) => `${props.size}px`};
`;
