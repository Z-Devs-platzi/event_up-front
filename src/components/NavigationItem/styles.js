import styled from 'styled-components';

export const Item = styled.li`
  padding-bottom: 20px;

  & .link {
    display: flex;
    align-items: center;
    font-weight: 700;
    color: var(--white);
    text-decoration: none;

    & .icon {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }

    &:hover {
      color: var(--secondary-color);
    }

    @media screen and (max-width: 900px) {
      flex-direction: column;

      & .icon {
        margin-right: 0;
      }
    }
  }

  &:last-child {
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 900px) {
      position: relative;
    }
  }

  @media screen and (max-width: 900px) {
    padding-bottom: 0;
  }
`;
