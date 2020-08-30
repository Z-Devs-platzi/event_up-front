import React from 'react';

import Spiner from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';
const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <Spiner {...args} />
    </>
  );
};

export const SpinerDefault = Story.bind({});

SpinerDefault.args = {};
SpinerDefault.parameters = {
  controls: { hideNoControlsWarning: false },
};
export const SpinerCustom = Story.bind({});

SpinerCustom.args = {
  color: '#FFA4A4',
  size: 80,
};
SpinerCustom.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: Spiner,
  title: 'Atom/Spiner',
  argTypes: {
    color: { control: 'color' },
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
