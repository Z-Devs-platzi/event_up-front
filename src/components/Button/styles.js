import styled from 'styled-components';

export const Buttons = styled.button`
  background: ${(props) =>
    props.buttonType === 'primary' ? 'var(--secondary-color)' : 'var(--white)'};
  border: ${(props) =>
    props.buttonType === 'primary'
      ? '1px solid var(--secondary-color)'
      : '1px solid var(--black)'};
  color: var(--black);
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${(props) => (props.buttonType === 'action' ? '.75rem' : '1rem')};
  font-weight: 700;
  margin: 1em;
  padding: ${(props) =>
    props.buttonType === 'action' ? '.25rem .5rem' : '.4375rem 2rem'};
  border-radius: 0.5rem;
  transition: background 0.3s ease-in-out;
  & svg {
    margin-left: 0.5rem;
    color: var(--black);
    font-size: ${(props) =>
      props.buttonType === 'action' ? '1.25rem' : '1.5rem'};
  }
  &:hover {
    background: ${(props) =>
      props.buttonType === 'primary'
        ? 'var(--white)'
        : 'var(--secondary-color)'};
  }
`;
