import React from 'react';
import { mount } from 'enzyme';
import LandingWraper from './index';

describe('<LandingWraper />', () => {
  test('Component render of LandingWraper', () => {
    const wreaper = mount(
      <LandingWraper>
        <h1>Hello Worldw</h1>
      </LandingWraper>
    );
    expect(wreaper.length).toEqual(1);
  });
});
