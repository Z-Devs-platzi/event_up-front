import React from 'react';
import { mount } from 'enzyme';
import Button from './index';
import { create } from 'react-test-renderer';

describe('<Button />', () => {
  test('Component render of Button', () => {
    const button = mount(<Button children={'some text'} />);
    expect(button.length).toEqual(1);
  });
});
