import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import NavigationBar from './index';

describe('<NavigationItem />', () => {
  test('Component render of NavigationItem', () => {
    const item = mount(
      <Router>
        <NavigationBar />
      </Router>
    );
    expect(item.length).toEqual(1);
  });
});
