import React from 'react';
import { mount } from 'enzyme';
import TextInput from './index';

describe('<TextInput />', () => {
  test('Component render of TextInput', () => {
    const textInput = mount(
      <TextInput
        id={'input'}
        logical={{ value: 'hello', onChange: () => {} }}
      />
    );
    expect(textInput.length).toEqual(1);
  });
});
