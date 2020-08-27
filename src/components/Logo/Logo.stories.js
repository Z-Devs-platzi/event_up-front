import React from 'react';

import Logo from '.';
import { GlobalStyle } from '../../styles/GlobalStyles';
const Story = (args) => {
  return (
    <>
      <GlobalStyle />
      <Logo {...args} />
    </>
  );
};

export const LogoDefault = Story.bind({});

LogoDefault.args = {};
LogoDefault.parameters = {
  controls: { hideNoControlsWarning: false },
};
export const LogoCustom = Story.bind({});

LogoCustom.args = {
  imageSize: 100,
  imagePath:
    'https://avatars2.githubusercontent.com/u/5388080?s=460&u=5402414fd0e79b83d14c93371973320948ba6d4f&v=4',
};
LogoCustom.parameters = {
  controls: { hideNoControlsWarning: false },
};

export default {
  component: LogoDefault,
  title: 'Atom/Logo',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};
