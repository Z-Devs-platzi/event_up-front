import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template-rows: 90px auto;
  grid-template-columns: 248px auto;
  grid-template-areas:
    'nav header'
    'nav content';
  @media screen and (max-width: 900px) {
    grid-template-rows: 56px 90px auto 60px;
    grid-template-columns: auto;
    grid-template-areas:
      'nav'
      'header'
      'content'
      'foot';
  }
`;
export const WrapperContent = styled.div`
  grid-area: content;
  padding: 5px;
`;
export const WrapperHeader = styled.div`
  grid-area: header;
`;
export const NavContainer = styled.div`
  grid-area: nav;
`;
