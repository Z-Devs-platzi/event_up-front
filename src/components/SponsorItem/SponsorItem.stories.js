import React from 'react';

import SponsorItem from '.';

import { GlobalStyle } from '../../styles/GlobalStyles';
const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <SponsorItem {...args} />
    </>
  );
};

export const SoponsorItemForm = Story.bind({});

SoponsorItemForm.args = {
  web_url: 'https://github.com/Z-Devs-platzi',
  sponsor_name: 'Z-devs',
  logo_url: 'https://avatars1.githubusercontent.com/u/69704720?s=200&v=4',
};
SoponsorItemForm.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: SoponsorItemForm,
  title: 'Molecule/SoponsorItemForm',
  argTypes: {
    saveSponsor: { control: 'hide' },
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
