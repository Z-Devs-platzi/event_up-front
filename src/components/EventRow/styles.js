import styled from 'styled-components';

export const Row = styled.div`
  display: grid;
  grid-template-columns: 44px 3fr 1fr 90px 80px;
  grid-gap: 20px;
  place-items: center;
  height: 92px;
  padding: 0 20px;
  font-weight: 600;
  background-color: var(--light-grey-1);
  border-radius: 8px;

  & .Row__avatar {
    grid-column: 1 / span 1;
  }

  & .Row__title {
    grid-column: 2 / span 1;
    justify-self: start;

    & .name {
      margin-bottom: 8px;
    }

    & .update-time {
      font-size: 0.75rem;
      color: var(--grey);
    }
  }

  & .Row__date {
    grid-column: 3 / span 1;
    justify-self: start;

    & .date {
      margin-bottom: 8px;
    }

    & .time {
      font-size: 0.75rem;
      color: var(--grey);
    }
  }

  & .Row__status {
    grid-column: 4 / span 1;
    justify-self: end;
  }

  & .Row__options {
    grid-column: 5 / span 1;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    li {
      padding: 0 1px;

      & .action {
        display: block;
        font-size: 0;
        color: var(--black);

        &:hover {
          color: var(--secondary-color);
        }

        & .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  @media screen and (max-width: 570px) {
    grid-template-columns: 44px 1fr 80px;
    grid-template-rows: 24px 1fr 22px 24px;
    grid-gap: 10px;
    place-items: initial;
    height: initial;
    margin-bottom: 20px;
    padding: 10px 10px 15px 15px;

    & .Row__avatar {
      grid-column: 1 / span 1;
      grid-row: 2 / span 1;
    }

    & .Row__title {
      grid-column: 2 / span 2;
      grid-row: 2 / span 1;
      width: 100%;
      padding-bottom: 5px;
      border-bottom: 1px solid var(--light-grey-2);
    }

    & .Row__date {
      grid-column: 2 / span 2;
      grid-row: 3 / span 1;

      & .date {
        display: inline-block;
        width: 130px;
        margin-bottom: 0;
      }

      & .time {
        display: inline;
      }
    }

    & .Row__status {
      grid-column: 2 / span 2;
      grid-row: 4 / span 1;
      justify-self: start;
    }

    & .Row__options {
      grid-column: 3 / span 1;
      grid-row: 1 / span 1;
    }
  }
`;
