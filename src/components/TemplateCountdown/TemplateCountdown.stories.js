import React from 'react';

import TemplateCountdown from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <TemplateCountdown {...args} />
    </>
  );
};

export const TemplateCountdownDefault = Story.bind({});
TemplateCountdownDefault.args = {};

export default {
  component: TemplateCountdownDefault,
  title: 'Template/TemplateCountdown',
  excludeStories: /.*Data$/,
};
