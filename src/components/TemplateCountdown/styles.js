import styled from 'styled-components';

export const CountdownSection = styled.section`
  position: relative;
  width: 100vw;
  height: 290px;
  padding-top: 33px;
  font-family: var(--font);
  background-color: var(--primary-color);
  text-align: center;

  @media screen and (max-width: 620px) {
    height: 200px;
  }
`;

export const Phrase = styled.div`
  font-size: 72px;
  font-weight: bold;
  color: var(--light-green);
  opacity: 0.2;

  @media screen and (max-width: 620px) {
    font-size: 38px;
  }
`;

export const Timer = styled.div`
  position: absolute;
  bottom: 60px;
  left: calc((100vw - 510px) / 2);

  @media screen and (max-width: 620px) {
    bottom: 20px;
    transform: scale(0.7);
  }
`;
