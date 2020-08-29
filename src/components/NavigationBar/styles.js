import styled from 'styled-components';

export const NavigationContainer = styled.div`
  position: fixed;
  z-index: 100;
  height: 100vh;
  width: 248px;

  @media screen and (max-width: 900px) {
    position: relative;
  }
`;

export const NavigationHeader = styled.header`
  padding: 44px 50px 0;
  background-color: var(--primary-color);

  & .logo {
    width: 148px;
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 56px;
    padding: 16px;

    & .logo {
      display: block;
      margin: 0 auto;
    }
  }
`;

export const NavigationMenu = styled.ul`
  position: relative;
  height: calc(100vh - 80px);
  padding: 38px 32px 0;
  background: var(--gradient-green);

  @media screen and (max-width: 900px) {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 60px;
    padding: 0 10px;
    background: var(--primary-color);
  }
`;
