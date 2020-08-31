import styled from 'styled-components';

export const Wrapper = styled.main`
  --template-color-primary: ${(props) => props.primary};
  --template-color-secondary: ${(props) => props.secondary};
  --template-color-compA: ${(props) => props.compA};
  --template-color-compB: ${(props) => props.compB};
  --template-font: ${(props) => props.font};
`;
