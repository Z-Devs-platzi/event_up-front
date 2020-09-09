import React from 'react';
import { mount } from 'enzyme';
import InputDateTime from './index';

describe('<InputDateTime />', () => {
  test('Component render of InputDateTime', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dateInput = mount(
      <InputDateTime
        logical={{ value: tomorrow, onChange: () => {} }}
        id='super'
      />
    );
    expect(dateInput.length).toEqual(1);
  });
});
