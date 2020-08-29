import React from 'react';
import { mount } from 'enzyme';
import Tag from '.';

describe('<Tag />', () => {
  test('Component render of Draft Tag', () => {
    const defaultTag = mount(<Tag />);
    expect(defaultTag.length).toEqual(1);
  });
  test('Component render of Published Tag', () => {
    const defaultTag = mount(<Tag status='published' />);
    expect(defaultTag.length).toEqual(1);
  });
  test('Component render of Finished Tag', () => {
    const defaultTag = mount(<Tag status='finished' />);
    expect(defaultTag.length).toEqual(1);
  });
});
