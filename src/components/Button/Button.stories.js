import React from 'react';

import { action } from '@storybook/addon-actions';
// REF https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/
import Button from './index';

const Story = (args) => <Button {...args} />;

// Each story then reuses that template
export const Primary = Story.bind({});
Primary.args = {
  children: 'Button Primary',
  onClick: action('click Primary'),
  buttonType: 'primary',
};

export const Secondary = Story.bind({});
Secondary.args = {
  children: 'Button Secondary',
  onClick: action('click Secondary'),
  buttonType: 'secondary',
};

export const Action = Story.bind({});
Action.args = {
  children: 'Action Button ',
  onClick: action('click Action'),
  buttonType: 'action',
};

export default {
  component: Button,
  title: 'Atom/Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
