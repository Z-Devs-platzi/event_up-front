import React from 'react';

import TemplateFooter from '.';
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
        <TemplateFooter {...args} />
      </TemplateWrapper>
    </>
  );
};

export const Default = Story.bind({});

Default.args = {};
Default.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: TemplateFooter,
  title: 'Molecule/ Templates / TemplateFooter',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
