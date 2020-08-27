import React from 'react';
import { LandingContent } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('LandingWraper / Styles', () => {
  it('should test the styled-component LandingContent default', () => {
    const landingStyles = renderer.create(<LandingContent />).toJSON();
    expect(landingStyles).toMatchSnapshot();
    expect(landingStyles).toHaveStyleRule('height', '100vh');
    expect(landingStyles).toHaveStyleRule('width', '100vw');
  });
  it('should test the styled-component LandingContent custom', () => {
    const landingStyles = renderer
      .create(
        <LandingContent
          img={
            'https://avatars2.githubusercontent.com/u/5388080?s=460&u=5402414fd0e79b83d14c93371973320948ba6d4f&v=4'
          }
        />
      )
      .toJSON();
    expect(landingStyles).toMatchSnapshot();
    expect(landingStyles).toHaveStyleRule(
      'background-image',
      'url(https://avatars2.githubusercontent.com/u/5388080?s=460&u=5402414fd0e79b83d14c93371973320948ba6d4f&v=4)'
    );
    expect(landingStyles).toHaveStyleRule('height', '100vh');
    expect(landingStyles).toHaveStyleRule('width', '100vw');
  });
});
