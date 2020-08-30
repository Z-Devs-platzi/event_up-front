import React from 'react';
import { action } from '@storybook/addon-actions';
import { BiCalendarPlus } from 'react-icons/bi';

import Button from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';

const ButtonChildren = ({ text }) => (
  <>
    {text} <BiCalendarPlus />
  </>
);

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
  children: 'Primary Button',
  onClick: action('Click Primary'),
  buttonType: 'primary',
};

export const PrimaryWithButton = Story.bind({});
PrimaryWithButton.args = {
  children: <ButtonChildren text='Primary Button ' />,
  onClick: action('Click Primary'),
  buttonType: 'primary',
};

export const Outline = Story.bind({});
Outline.args = {
  children: 'Outline Button',
  onClick: action('Click Outline'),
  buttonType: 'outline',
};

export const OutlineWithButton = Story.bind({});
OutlineWithButton.args = {
  children: <ButtonChildren text='Outline Button ' />,
  onClick: action('Click Outline'),
  buttonType: 'outline',
};

export default {
  component: Button,
  title: 'Atom/Button',
  argTypes: {
    children: { control: 'text' },
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
