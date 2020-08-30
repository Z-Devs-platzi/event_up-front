import styled from 'styled-components';

export const AvatarImage = styled.img`
  --size: ${(props) => props.size};
  display: block;
  width: var(--size);
  height: var(--size);
  background-color: var(--grey);
  border-radius: 50%;
  object-fit: cover;
  border: none;
`;
