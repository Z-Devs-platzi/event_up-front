import React from 'react';

import DashboardHeader from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <DashboardHeader {...args} />
    </>
  );
};

export const Default = Story.bind({});

Default.args = {
  organization: {
    name: 'My Organization',
    logo:
      'https://images.unsplash.com/photo-1552928288-fb12b88744dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=909&q=80',
  },
};

Default.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: DashboardHeader,
  title: 'Molecule/DashboardHeader',

  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
