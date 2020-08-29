import styled from 'styled-components';

export const NavigationContainer = styled.div`
  position: fixed;
  width: 248px;
`;

export const NavigationHeader = styled.header`
  padding: 44px 50px 0;
  background-color: var(--primary-color);

  & .logo {
    width: 147px;
  }
`;

export const NavigationMenu = styled.ul`
  position: relative;
  height: calc(100vh - 80px);
  padding: 38px 32px 0;
  background: var(--gradient-green);
`;
