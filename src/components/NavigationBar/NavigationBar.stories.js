import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import NavigationBar from '.';
import AppProviders from '../../context/app-provider';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Story = (args) => {
  return (
    <Router>
      <AppProviders>
        <GlobalStyle />
        <NavigationBar {...args} />
      </AppProviders>
    </Router>
  );
};

export const NavigationBarDefault = Story.bind({});
NavigationBarDefault.args = {};

export default {
  component: NavigationBarDefault,
  title: 'Molecule/NavigationBar',
  excludeStories: /.*Data$/,
};
