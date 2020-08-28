import React from 'react';

import CalendarDatePicker from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';

const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <CalendarDatePicker {...args} />
    </>
  );
};

export const CalendarPickerDefault = Story.bind({});
CalendarPickerDefault.args = {};
CalendarPickerDefault.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: CalendarDatePicker,
  title: 'Atom/CalendarDatePicker',
  argTypes: {},
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
