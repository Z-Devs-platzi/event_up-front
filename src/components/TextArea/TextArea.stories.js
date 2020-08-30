import React from 'react';

import TextArea from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';
const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <TextArea {...args} />
    </>
  );
};

export const Default = Story.bind({});

Default.args = {
  id: 'super',
  label: 'Textarea',
  rows: 5,
};
Default.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: TextArea,
  title: 'Atom/TextArea',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
