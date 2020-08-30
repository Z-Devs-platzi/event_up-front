import styled from 'styled-components';

export const Wrapper = styled.main`
  --template-color-primary: ${(props) => props.primary};
  --template-secondary: ${(props) => props.secondary};
  --template-compA: ${(props) => props.compA};
  --template-compB: ${(props) => props.compB};
  --template-font: ${(props) => props.font};
`;
