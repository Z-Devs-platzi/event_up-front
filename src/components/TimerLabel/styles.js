import styled from 'styled-components';

export const SpanTimer = styled.span`
  font-size: ${(props) => `${props.size}em`};
  padding: 0.25rem 1rem;
  opacity: 1;
  font-weight: 800;
  color: ${(props) => props.color};
`;
