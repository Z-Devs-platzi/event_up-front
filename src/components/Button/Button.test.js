import React from 'react';
import { mount } from 'enzyme';
import Button from './index';

describe('<Button />', () => {
  test('Component render of Button Primary', () => {
    const button = mount(<Button>Some Text</Button>);
    expect(button.length).toEqual(1);
  });
  test('Component render of Button Outline', () => {
    const button = mount(<Button buttonType='outline'>Some Text</Button>);
    expect(button.length).toEqual(1);
  });
});
