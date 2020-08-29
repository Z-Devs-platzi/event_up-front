import React from 'react';
import Avatar from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <Avatar {...args} />
    </>
  );
};

export const AvatarDefault = Story.bind({});
AvatarDefault.args = {
  size: '2.75rem',
  src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  alt: 'Avatar',
};

export const AvatarLanding = Story.bind({});
AvatarLanding.args = {
  size: '10rem',
  src:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
  alt: 'Speaker Name',
};

export default {
  title: 'Atom/Avatar',
  component: Avatar,

  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
