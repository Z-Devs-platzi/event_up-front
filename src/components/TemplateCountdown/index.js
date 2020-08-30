import React from 'react';
import TimerLabel from '../TimerLabel';
import { CountdownSection, Phrase, Timer } from './styles';

const TemplateCountdown = () => {
  return (
    <CountdownSection>
      <Phrase>Time until event</Phrase>
      <Timer>
        <TimerLabel />
      </Timer>
    </CountdownSection>
  );
};

export default TemplateCountdown;
