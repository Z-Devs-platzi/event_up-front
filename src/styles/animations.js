import { css, keyframes } from 'styled-components';

const rotateKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const Rotate360 = ({
  time = '3s',
  type = 'linear',
  duration = 'infinite',
} = {}) => css`
  animation: ${rotateKeyframes} 2s linear infinite;
`;
// animation: ${rotateKeyframes} ${time} ${type} ${duration};
