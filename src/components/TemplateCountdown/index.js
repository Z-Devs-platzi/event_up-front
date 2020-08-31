import React from 'react';
import TimerLabel from '../TimerLabel';
import PropTypes from 'prop-types';
import { CountdownSection, Phrase, Timer } from './styles';

const TemplateCountdown = ({ date }) => {
  return (
    <CountdownSection>
      <Phrase>Time until event</Phrase>
      <Timer>
        <TimerLabel date={date} />
      </Timer>
    </CountdownSection>
  );
};

TemplateCountdown.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

const tomorrow = new Date();
TemplateCountdown.defaultProps = {
  date: tomorrow.setDate(tomorrow.getDate() + 1),
  sizeTime: 96,
  sizeLabel: 23,
  colorTime: '#FFD43B',
  colorLabel: '#DBE7E8',
  showLabel: true,
};

export default TemplateCountdown;
