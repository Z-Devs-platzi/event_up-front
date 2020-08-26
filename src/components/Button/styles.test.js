import React from 'react';
import { Buttons } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('test styled-components for the Button component', () => {
  it('should test the styled-component file', () => {
    const buttonStyles = renderer.create(<Buttons />).toJSON();
    expect(buttonStyles).toMatchSnapshot();
    expect(buttonStyles).toHaveStyleRule('cursor', 'pointer');
  });
});
