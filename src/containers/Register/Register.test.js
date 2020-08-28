import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../context/auth-context';
import Register from './index';

describe('<Register />', () => {
  test('Component render of Register', () => {
    const register = mount(
      <AuthProvider>
        <Router>
          <Register />
        </Router>
      </AuthProvider>
    );
    expect(register.length).toEqual(1);
  });
});
