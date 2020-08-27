import React from 'react';
import { mount } from 'enzyme';
import Logo from './index';

describe('<Logo />', () => {
  test('Component render of Logo', () => {
    const logo = mount(<Logo />);
    expect(logo.length).toEqual(1);
  });
});
