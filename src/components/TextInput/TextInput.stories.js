import React from 'react';

import TextInput from '.';
import { useFormTextField } from '../../utility/hooks/useFormFields';
const Story = (args) => {
  let Textlogical = useFormTextField('');
  return <TextInput logical={Textlogical} {...args} />;
};

export const Text = Story.bind({});

Text.args = {
  label: 'Text Input',
  placeholder: 'placeholder',
  id: 'super',
  type: 'text',
};
Text.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: TextInput,
  title: 'Atom/TextInput',
  argTypes: {
    logical: { control: 'hide' },
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
