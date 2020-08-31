import styled from 'styled-components';

export const Sponsors = styled.section`
  width: 100vw;
  padding: 20px 32px 47px;
  background-color: var(--light-grey-2);
`;

export const SponsorsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Sponsor = styled.div`
  width: 300px;
  margin: 0 10px, 20px;

  & .sponsorImage {
    width: 100%;
  }
`;
