import React from 'react';
import Tag from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <Tag {...args} />
    </>
  );
};

export const TagDraft = Story.bind({});
Tag.args = {
  status: 'draft',
};

Tag.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: Tag,
  title: 'Atom/Tag',

  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
