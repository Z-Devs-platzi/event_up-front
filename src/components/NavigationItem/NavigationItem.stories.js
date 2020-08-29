import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { action } from '@storybook/addon-actions';
import NavigationItem from '.';
import { BiCalendarEvent } from 'react-icons/bi';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Story = (args) => {
  return (
    <Router>
      <GlobalStyle />
      <NavigationItem {...args} />
    </Router>
  );
};

export const NavigationItemDefault = Story.bind({});
NavigationItemDefault.args = {
  to: action('click Primary'),
  label: 'Navigation Primary',
  iconItem: <BiCalendarEvent className='icon' />,
};

export default {
  component: NavigationItemDefault,
  title: 'Atom/NavigationItem',
  decorators: [
    (Story) => (
      <ul
        style={{
          position: 'relative',
          width: '248px',
          height: '65px',
          padding: '10px',
          backgroundColor: 'var(--primary-color)',
          listStyle: 'none',
        }}
      >
        <Story />
      </ul>
    ),
  ],
  excludeStories: /.*Data$/,
};
