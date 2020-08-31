import React from 'react';

import SponsorForm from '.';

import { GlobalStyle } from '../../styles/GlobalStyles';
const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <SponsorForm {...args} />
    </>
  );
};

export const SoponsorForm = Story.bind({});

SoponsorForm.args = {};
SoponsorForm.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: SoponsorForm,
  title: 'Molecule/SoponsorForm',
  argTypes: {},
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
