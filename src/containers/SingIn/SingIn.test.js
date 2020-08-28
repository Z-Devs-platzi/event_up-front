import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../context/auth-context';
import SingIn from './index';

describe('<SingIn />', () => {
  test('Component render of SingIn', () => {
    const singIn = mount(
      <AuthProvider>
        <Router>
          <SingIn />
        </Router>
      </AuthProvider>
    );
    expect(singIn.length).toEqual(1);
  });
});
