import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { BiEdit, BiCalendarEvent } from 'react-icons/bi';
import {
  BannerWrapper,
  OverlayLayer,
  ImageContainer,
  InfoContainer,
  EditionTools,
  BannerTitle,
  DateWraper,
  EventInfo,
} from './styles';
import { format } from 'date-fns';

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
        <BannerTitle>{props.bannerTitle}</BannerTitle>
        <DateWraper>
          <BiCalendarEvent />
          {format(new Date(props.eventDate), 'MMM dd, yyyy / HH:mm')}
        </DateWraper>
        <EventInfo>{props.eventDescription}</EventInfo>
        <a href='#registerForm'>
          <Button>Regiter Now</Button>
        </a>
      </InfoContainer>
    </BannerWrapper>
  );
};

TemplateBanner.propTypes = {
  admin: PropTypes.bool,
  bannerBg: PropTypes.string,
  bannerTitle: PropTypes.string,
  eventDescription: PropTypes.string,
  eventDate: PropTypes.string,
};

export default TemplateBanner;
