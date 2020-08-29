import React from 'react';

import ColorInput from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';
import { useFormTextField } from '../../utility/hooks/useFormFields';

const Story = (args) => {
  let colorlogical = useFormTextField('#A4A4A4');
  return (
    <>
      <GlobalStyle />
      <ColorInput logical={colorlogical} {...args} />
    </>
  );
};

export const Default = Story.bind({});

Default.args = {};

Default.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: ColorInput,
  title: 'Atom/ColorInput',
  argTypes: {
    colorSelect: { control: 'color' },
    logical: { control: 'hide' },
  },

  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
