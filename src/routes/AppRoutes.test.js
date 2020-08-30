import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

describe('<AppRoutes />', () => {
  test('Component render of AppRoutes', () => {
    const wreaper = mount(
      <Router>
        <AppRoutes />
      </Router>
    );
    expect(wreaper.length).toEqual(1);
  });
});
