import React from 'react';
import { LogoContainer } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Logo / Styles', () => {
  it('should test the styled-component Logo default', () => {
    const labelStyles = renderer.create(<LogoContainer />).toJSON();
    expect(labelStyles).toMatchSnapshot();
    expect(labelStyles).toHaveStyleRule('height', '50px');
  });
  it('should test the styled-component Logo custom', () => {
    const inputStyles = renderer
      .create(
        <LogoContainer
          size={100}
          img={
            'https://avatars2.githubusercontent.com/u/5388080?s=460&u=5402414fd0e79b83d14c93371973320948ba6d4f&v=4'
          }
        />
      )
      .toJSON();
    expect(inputStyles).toMatchSnapshot();
    expect(inputStyles).toHaveStyleRule('height', '100px');
    expect(inputStyles).toHaveStyleRule(
      'background-image',
      'url(https://avatars2.githubusercontent.com/u/5388080?s=460&u=5402414fd0e79b83d14c93371973320948ba6d4f&v=4)'
    );
  });
});
