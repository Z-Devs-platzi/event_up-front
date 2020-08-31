import styled from 'styled-components';

export const CountTimer = styled.span.attrs((props) => ({
  color: props.color ? props.color : 'var(--secondary-color)',
  size: props.size ? props.size : '96',
}))`
  padding: 0.25rem 1rem;
  opacity: 1;
  font-weight: 800;
  color: ${(props) => props.color};
  font-family: var(--font);
  font-size: ${(props) => `${props.size}px`};
  font-style: normal;
  font-weight: bold;
  line-height: 125px;
  text-align: center;
`;

export const SimpleLavel = styled.p.attrs((props) => ({
  color: props.color ? props.color : 'var(--light-green)',
  size: props.size ? props.size : '23',
}))`
  font-family: var(--font);
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => `${props.size}px`};
  line-height: 31px;
  text-align: center;
  color: ${(props) => props.color};
`;
