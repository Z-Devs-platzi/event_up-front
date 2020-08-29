import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import NavigationBar from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Story = (args) => {
  return (
    <Router>
      <GlobalStyle />
      <NavigationBar {...args} />
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
