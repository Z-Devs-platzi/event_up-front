import styled from 'styled-components';

export const ButtonS = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) =>
    props.buttonType === 'primary' ? 'palevioletred' : 'white'};
  color: ${(props) =>
    props.buttonType === 'primary' ? 'white' : 'palevioletred'};
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
