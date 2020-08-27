import React from 'react';

import { action } from '@storybook/addon-actions';
import Button from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';
import bxUser from '@iconify/icons-bx/bx-user';

const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <Button {...args} />
    </>
  );
};

export const Primary = Story.bind({});
Primary.args = {
  children: 'Button Primary',
  onClick: action('click Primary'),
  buttonType: 'primary',
};

export const PrimaryIcon = Story.bind({});
PrimaryIcon.args = {
  children: 'Button Primary',
  onClick: action('click Primary'),
  buttonType: 'primary',
  icon: { bxUser },
};

export const Secondary = Story.bind({});
Secondary.args = {
  children: 'Button Secondary',
  onClick: action('click Secondary'),
  buttonType: 'secondary',
};

export const SecondaryIcon = Story.bind({});
SecondaryIcon.args = {
  children: 'Button Secondary',
  onClick: action('click Secondary'),
  buttonType: 'secondary',
  icon: { bxUser },
};

export const Action = Story.bind({});
Action.args = {
  children: 'Action Button ',
  onClick: action('click Action'),
  buttonType: 'action',
};

export const ActionIcon = Story.bind({});
ActionIcon.args = {
  children: 'Action Button ',
  onClick: action('click Action'),
  buttonType: 'action',
  icon: { bxUser },
};

export default {
  component: Button,
  title: 'Atom/Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
