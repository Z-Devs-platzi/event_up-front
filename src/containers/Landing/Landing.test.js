import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import Landing from './index';

describe('<Landing />', () => {
  test('Component render of Landing', () => {
    const landing = mount(
      <Router>
        <Landing />
      </Router>
    );
    expect(landing.length).toEqual(1);
  });
});
