import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import NavigationBar from './index';
import { AuthProvider } from '../../context/auth-context';
describe('<NavigationItem />', () => {
  test('Component render of NavigationItem', () => {
    const item = mount(
      <AuthProvider>
        <Router>
          <NavigationBar />
        </Router>
      </AuthProvider>
    );
    expect(item.length).toEqual(1);
  });
});
