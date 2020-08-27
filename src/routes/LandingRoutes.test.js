import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import LandingRoutes from './LandingRoutes';

describe('<LandingRoutes />', () => {
  test('Component render of LandingRoutes', () => {
    const wreaper = mount(
      <Router>
        <LandingRoutes />
      </Router>
    );
    expect(wreaper.length).toEqual(1);
  });
});
