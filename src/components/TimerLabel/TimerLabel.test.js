import React from 'react';
import { mount } from 'enzyme';
import TimerLabel from './index';

describe('<TimerLabel />', () => {
  test('Component render of TimerLabel', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const Timer = mount(<TimerLabel date={tomorrow} />);
    expect(Timer.length).toEqual(1);
  });
});
