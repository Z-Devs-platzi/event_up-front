import React from 'react';
import { Wrapper, WrapperContent, NavContainer, WrapperHeader } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('AppWraper stayles-component', () => {
  it('should test the styled-component Wrapper', () => {
    const itemStyles = renderer.create(<Wrapper />).toJSON();
    expect(itemStyles).toMatchSnapshot();
    expect(itemStyles).toHaveStyleRule('display', 'grid');
  });
  it('should test the styled-component WrapperContent', () => {
    const itemStyles = renderer.create(<WrapperContent />).toJSON();
    expect(itemStyles).toMatchSnapshot();
    expect(itemStyles).toHaveStyleRule('grid-area', 'content');
    expect(itemStyles).toHaveStyleRule('padding', '5px');
  });
  it('should test the styled-component NavContainer', () => {
    const itemStyles = renderer.create(<NavContainer />).toJSON();
    expect(itemStyles).toMatchSnapshot();
    expect(itemStyles).toHaveStyleRule('grid-area', 'nav');
  });
  it('should test the styled-component WrapperHeader', () => {
    const itemStyles = renderer.create(<WrapperHeader />).toJSON();
    expect(itemStyles).toMatchSnapshot();
    expect(itemStyles).toHaveStyleRule('grid-area', 'header');
  });
});
