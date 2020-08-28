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
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

CalendarPickerDefault.args = {
  // eventDate: tomorrow,
  id: 'super',
};

CalendarPickerDefault.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: CalendarDatePicker,
  title: 'Atom/CalendarDatePicker',
  argTypes: {
    eventDate: { control: 'date' },
  },

  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
