import React from 'react';

import SpeakerCard from '.';
import { GlobalStyle } from '../../../styles/GlobalStyles';
import TemplateWrapper from '../TemplateWrapper';
const Story = (args) => {
  const theme = {
    font: 'Arial',
    primary: '#FFD43B',
    secondary: '#125E68',
    compA: '#DBE7E8',
    compB: '#CDCDCD',
  };
  return (
    <>
      <TemplateWrapper theme={theme}>
        <GlobalStyle />
        <SpeakerCard {...args} />
      </TemplateWrapper>
    </>
  );
};

export const Default = Story.bind({});

Default.args = {
  name: 'George H. Ossa',
  picture:
    'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  bannerTitle: 'Amet minim mollit non deserunt',
  biography:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  eventDate: '2012-09-25T06:00:00-05:00',
  twitter: 'georgehossa',
};
Default.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: SpeakerCard,
  title: 'Molecule/ Templates / SpeakerCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
