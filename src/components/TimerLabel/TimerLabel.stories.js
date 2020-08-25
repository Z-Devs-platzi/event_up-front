import React from 'react';
// REF https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/
import TimerLabel from '.';

const Story = (args) => <TimerLabel {...args} />;

// Each story then reuses that template
export const Normal = Story.bind({});

const tomorrow = new Date();
Normal.args = {
  date: tomorrow.setDate(tomorrow.getDate() + 1),
  size: 1,
};

export default {
  component: TimerLabel,
  title: 'Atom/TimerLabel',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
