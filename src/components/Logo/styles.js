import styled from 'styled-components';
import defaultBrand from '../../assets/event_up_logo.svg';

export const LogoContainer = styled.div.attrs((props) => ({
  img: props.img ? props.img : defaultBrand,
  size: props.size ? props.size : 50,
}))`
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  height: ${(props) => `${props.size}px`};
  width: 250px;
`;
