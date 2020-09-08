import React from 'react';
import PropTypes from 'prop-types';
import {
  SpeakerWrapper,
  SpeakerName,
  SpeakerInfoWrapper,
  SpeakerBio,
  SpeakerTwitter,
} from './styles';
import Avatar from '../../Avatar';
import { FaTwitter } from 'react-icons/fa';

const SpeakerCard = ({ picture, name, biography, twitter }) => {
  return (
    <SpeakerWrapper>
      <Avatar size='10rem' src={picture} alt={name} />
      <SpeakerInfoWrapper>
        <SpeakerName>{name}</SpeakerName>
        <SpeakerBio>{biography}</SpeakerBio>
        <SpeakerTwitter href={`https://twitter.com/${twitter}`}>
          <FaTwitter /> {twitter}
        </SpeakerTwitter>
      </SpeakerInfoWrapper>
    </SpeakerWrapper>
  );
};

SpeakerCard.propTypes = {
  picture: PropTypes.string,
  name: PropTypes.string,
  biography: PropTypes.string,
  twitter: PropTypes.string,
};

SpeakerCard.defaultProps = {
  // bla: 'test',
};

export default SpeakerCard;
