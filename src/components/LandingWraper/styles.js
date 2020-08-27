import styled from 'styled-components';
import defaultBack from '../../assets/landing_background.png';
export const LandingContent = styled.section.attrs((props) => ({
  img: props.img ? props.img : defaultBack,
  size: props.size ? props.size : '50',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: var(--light-grey-2);
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;
export const LandingP = styled.p`
  text-align: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  margin-bottom: 40px;
  margin-top: 20px;
`;
