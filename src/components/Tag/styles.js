import styled, { css } from 'styled-components';

export const StatusTag = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding: 0.25rem 1rem;
  background-color: ${(props) => {
    if (props.status === 'published') {
      return 'var(--published)';
    } else if (props.status === 'finished') {
      return 'var(--light-green)';
    } else {
      return 'var(--primary-color)';
    }
  }};
  color: ${(props) => {
    if (props.status === 'published') {
      return 'var(--black)';
    } else if (props.status === 'finished') {
      return 'var(--grey)';
    } else {
      return 'var(--white)';
    }
  }};
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  transition: 0.3s linear;
  cursor: default;
`;
