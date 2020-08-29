import React from 'react';
import { mount } from 'enzyme';
import Spiner from './index';

describe('<Spiner />', () => {
  test('Component render of Spiner', () => {
    const spiner = mount(<Spiner />);
    expect(spiner.length).toEqual(1);
  });
});
