import React from 'react';
import { mount } from 'enzyme';
import ColorInput from './index';

describe('<ColorInput />', () => {
  test('Component render of ColorInput', () => {
    const input = mount(
      <ColorInput
        id={'input'}
        logical={{ value: 'hello', onChange: () => {} }}
      />
    );
    expect(input.length).toEqual(1);
  });
});
