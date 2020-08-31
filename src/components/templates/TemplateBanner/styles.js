import styled from 'styled-components';

export const BannerWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-color: var(--grey);
  overflow: hidden;
  @media (max-width: 480px) {
    height: 100vh;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: grayscale(100%);
`;

export const OverlayLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.5;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(18, 94, 104, 1) 0%,
    rgba(255, 212, 59, 1) 152%
  );
  background-blend-mode: overlay;
  width: 100vw;
  height: 100%;
`;

export const InfoContainer = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--white);
  width: 80vw;
`;

export const EditionTools = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const BannerTitle = styled.h1`
  margin-bottom: 1rem;
  font-family: var(--template-font);
  font-size: 4.5rem;
  text-align: center;
  line-height: 4.5rem;
  @media (max-width: 480px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`;

export const DateWraper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--template-color-primary);
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const EventInfo = styled.p`
  margin-bottom: 1rem;
  text-align: center;
`;
