import React from 'react';
import PropTypes from 'prop-types';
import SpeakerCard from '../SpeakerCard';
import { TemplateSpeakersWrapper, TemplateSpeakersTitle } from './styles';

const TemplateSpeakers = ({ event }) => {
  const expositors = event.schedule.flatMap((item) => item.expositors);
  return (
    <TemplateSpeakersWrapper>
      <TemplateSpeakersTitle>Speakers</TemplateSpeakersTitle>
      {expositors.map((speaker) => (
        <SpeakerCard
          key={speaker.name}
          name={speaker.name}
          picture={speaker.picture}
          biography={speaker.bio}
          twitter={speaker.twitter}
        />
      ))}
    </TemplateSpeakersWrapper>
  );
};

TemplateSpeakers.propTypes = {
  event: PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    banner_img: PropTypes.string,
    banner_title: PropTypes.string,
    template: PropTypes.objectOf({
      id: PropTypes.number,
      colors: PropTypes.string,
      banner: PropTypes.string,
      font: PropTypes.string,
      layout: PropTypes.objectOf({
        id: PropTypes.number,
      }),
    }),
    sponsors: PropTypes.array,
    schedule: PropTypes.array,
  }),
};

export default TemplateSpeakers;
