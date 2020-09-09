import styled from 'styled-components';

export const SpeakerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1.25rem 0;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const SpeakerInfoWrapper = styled.div`
  margin-left: 1.5rem;
  @media (max-width: 480px) {
    text-align: center;
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;

export const SpeakerName = styled.h4`
  position: relative;
  font-size: 1.5rem;
  font-family: var(--template-font), sans-serif;
  color: var(--template-color-secondary);
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    display: block;
    width: 3rem;
    background-color: var(--template-color-secondary);
    height: 0.06rem;
  }
  @media (max-width: 480px) {
    &::after {
      right: 0;
      margin: 0 auto;
    }
  }
`;

export const SpeakerBio = styled.p`
  margin: 1.25rem 0 0.625rem;
  font-family: var(--template-font), sans-serif;
  color: var(--black);
  font-size: 1rem;
`;

export const SpeakerTwitter = styled.a`
  display: flex;
  align-items: center;
  font-family: var(--template-font), sans-serif;
  color: var(--template-color-secondary);
  font-size: 0.75rem;
  text-decoration: underline;
  column-gap: 0.25rem;
  @media (max-width: 480px) {
    justify-content: center;
  }
`;
