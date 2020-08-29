import React from 'react';
import { Item } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('test styled-components for the NavigationItem component', () => {
  it('should test the styled-component file', () => {
    const itemStyles = renderer.create(<Item />).toJSON();
    expect(itemStyles).toMatchSnapshot();
    expect(itemStyles).toHaveStyleRule('padding-bottom', '20px');
  });
});
