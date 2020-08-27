import React from 'react';
import { mount } from 'enzyme';
import TextInput from './index';

describe('<TextInput />', () => {
  test('Component render of TextInput', () => {
    const button = mount(
      <TextInput
        id={'input'}
        logical={{ value: 'hello', onChange: () => {} }}
      />
    );
    expect(button.length).toEqual(1);
  });
});
