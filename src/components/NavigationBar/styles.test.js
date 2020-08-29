import React from 'react';
import {
  NavigationContainer,
  NavigationHeader,
  NavigationMenu,
} from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Test NavigationBar styled-components', () => {
  it('should test the styled-component NavigationContainer', () => {
    const containerStyles = renderer.create(<NavigationContainer />).toJSON();
    expect(containerStyles).toMatchSnapshot();
    expect(containerStyles).toHaveStyleRule('position', 'fixed');
  });
  it('should test the styled-component NavigationHeader', () => {
    const headerStyles = renderer.create(<NavigationHeader />).toJSON();
    expect(headerStyles).toMatchSnapshot();
    expect(headerStyles).toHaveStyleRule(
      'background-color',
      'var(--primary-color)'
    );
  });
  it('should test the styled-component NavigationMenu', () => {
    const menuStyles = renderer.create(<NavigationMenu />).toJSON();
    expect(menuStyles).toMatchSnapshot();
    expect(menuStyles).toHaveStyleRule('background', 'var(--gradient-green)');
  });
});
