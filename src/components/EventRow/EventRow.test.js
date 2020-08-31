import React from 'react';
import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import EventRow from '.';

// Component
describe('<EventRow />', () => {
  test('EventRow Component render', () => {
    const event = mount(
      <Router>
        <EventRow />
      </Router>
    );
    expect(event.length).toEqual(1);
  });
});

// Styles
describe('EventRow / Styles', () => {
  it('EventRow Styles / Default', () => {
    const eventRowDefault = renderer
      .create(
        <Router>
          <EventRow />
        </Router>
      )
      .toJSON();
    expect(eventRowDefault).toMatchSnapshot();
    expect(eventRowDefault).toHaveStyleRule('height', '92px');
  });
});
