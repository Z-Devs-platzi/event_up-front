import React from 'react';

import TemplateWrapper from '.';
import { GlobalStyle } from '../../../styles/GlobalStyles';
const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <TemplateWrapper {...args} />
    </>
  );
};

export const Default = Story.bind({});

Default.args = {
  theme: {
    font: 'Arial',
    primary: '#FFD43B',
    secondary: '#125E68',
    compA: '#DBE7E8',
    compB: '#CDCDCD',
  },
};
Default.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: TemplateWrapper,
  title: 'Organism / TemplateWrapper',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
