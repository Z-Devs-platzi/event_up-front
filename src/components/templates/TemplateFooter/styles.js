import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2.5rem;
  background-color: var(--template-color-secondary);
  box-sizing: border-box;
`;

export const LogoContainer = styled.div`
  color: var(--white);
  font-size: 0.75rem;
  text-align: center;
`;

export const Logo = styled.img`
  display: block;
  width: 5.5rem;
`;
