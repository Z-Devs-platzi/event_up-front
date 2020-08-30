import styled from 'styled-components';

export const BannerWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: var(--grey);
  overflow: hidden;
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
    rgba(18, 94, 104, 0.85) 0%,
    rgba(255, 212, 59, 0.13) 152%
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
`;

export const EditionTools = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
