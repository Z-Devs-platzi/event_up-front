import React from 'react';

import TemplateBanner from '.';
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
        <TemplateBanner {...args} />
      </TemplateWrapper>
    </>
  );
};

export const Default = Story.bind({});

Default.args = {
  admin: false,
  bannerBg:
    'https://images.unsplash.com/photo-1520110120835-c96534a4c984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80',
  bannerTitle: 'Amet minim mollit non deserunt',
  eventDescription:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  eventDate: 'aug 21, 2020 / 10:30',
};
Default.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: TemplateBanner,
  title: 'Molecule/ Templates / TemplateBanner',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
