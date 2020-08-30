import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import EventRow from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Story = (args) => {
  return (
    <Router>
      <GlobalStyle />
      <EventRow {...args} />
    </Router>
  );
};

export const EventRowDefault = Story.bind({});
EventRowDefault.args = {};

export default {
  component: EventRowDefault,
  title: 'Molecule/EventRow',
  excludeStories: /.*Data$/,
};
