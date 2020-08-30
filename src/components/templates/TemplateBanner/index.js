import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { BiEdit } from 'react-icons/bi';
import {
  BannerWrapper,
  OverlayLayer,
  ImageContainer,
  InfoContainer,
  EditionTools,
} from './styles';

const TemplateBanner = (props) => {
  const goToEditMode = () => {
    console.log('Go to Edit Mode');
  };
  return (
    <BannerWrapper>
      <OverlayLayer />
      <ImageContainer bgImage={props.bannerBg} />
      <InfoContainer>
        {props.admin && (
          <EditionTools>
            <Button onClick={goToEditMode}>
              Edit <BiEdit />
            </Button>
          </EditionTools>
        )}
        <h1>{props.bannerTitle}</h1>
        <p>{props.eventDescription}</p>
        <Button>Regiter Now</Button>
      </InfoContainer>
    </BannerWrapper>
  );
};

TemplateBanner.propTypes = {
  admin: PropTypes.bool,
  bannerBg: PropTypes.string,
  bannerTitle: PropTypes.string,
  eventDescription: PropTypes.string,
};

export default TemplateBanner;
