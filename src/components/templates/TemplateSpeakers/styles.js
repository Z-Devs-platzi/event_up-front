import styled from 'styled-components';

export const TemplateSpeakersWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 3.5rem;
  background-color: var(--template-color-compA);
  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;

export const TemplateSpeakersTitle = styled.h2`
  font-family: var(--template-font), sans-serif;
  font-size: 6rem;
  color: var(--template-color-secondary);
  opacity: 0.2;
  @media (max-width: 480px) {
    font-size: 3.5rem;
    text-align: center;
  }
`;
