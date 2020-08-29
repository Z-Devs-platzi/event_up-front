import styled from 'styled-components';

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;
  padding: 0.5rem 2rem;
  background: ${(props) =>
    props.buttonType === 'primary' ? 'var(--secondary-color)' : 'transparent'};
  border: ${(props) =>
    props.buttonType === 'primary'
      ? '1px solid var(--secondary-color)'
      : '1px solid var(--black)'};
  color: var(--black);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.5rem;
  transition: background 0.3s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.buttonType === 'primary'
        ? 'var(--white)'
        : 'var(--secondary-color)'};
  }
`;
