import React from 'react';
import { mount } from 'enzyme';
import TextArea from '.';

describe('<TextArea />', () => {
  test('TextArea / Default', () => {
    const defaultTexarea = mount(<TextArea id='super' />);
    expect(defaultTexarea.length).toEqual(1);
  });
});
