import React from 'react';
import { mount } from 'enzyme';
import TemplateCountdown from '.';

// Component
describe('<TemplateCountdown />', () => {
  test('TemplateCountdown Component render', () => {
    const event = mount(<TemplateCountdown />);
    expect(event.length).toEqual(1);
  });
});
