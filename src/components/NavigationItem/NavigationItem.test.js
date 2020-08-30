import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import NavigationItem from './index';
import { BiCalendarEvent } from 'react-icons/bi';

describe('<NavigationItem />', () => {
  test('Component render of NavigationItem', () => {
    const item = mount(
      <Router>
        <NavigationItem
          label={'some text'}
          to={'/'}
          iconItem={<BiCalendarEvent className='icon' />}
        />
      </Router>
    );
    expect(item.length).toEqual(1);
  });
});
