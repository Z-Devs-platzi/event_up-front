import React from 'react';

import FileInput from '.';
import { useFormFileField } from '../../utility/hooks/useFormFields';
import { GlobalStyle } from '../../styles/GlobalStyles';
const Story = (args) => {
  let Filelogical = useFormFileField('');
  return (
    <>
      <GlobalStyle />
      <FileInput logical={Filelogical} {...args} />
    </>
  );
};

export const Text = Story.bind({});

Text.args = {
  label: 'Text Input',
  id: 'super',
};
Text.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: FileInput,
  title: 'Atom/FileInput',
  argTypes: {
    logical: { control: 'hide' },
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
