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
  }

  &:last-child {
    position: absolute;
    bottom: 0;
  }
`;
