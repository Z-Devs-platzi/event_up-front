import styled from 'styled-components';

export const CountTimer = styled.span`
  padding: 0.25rem 1rem;
  opacity: 1;
  font-weight: 800;
  color: ${(props) => props.color};
  font-family: IBM Plex Sans;
  font-size: ${(props) => `${props.size}px`};
  font-style: normal;
  font-weight: bold;
  line-height: 125px;
  text-align: center;
`;

export const SimpleLavel = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => `${props.size}px`};
  line-height: 31px;
  text-align: center;
  color: ${(props) => props.color};
`;
