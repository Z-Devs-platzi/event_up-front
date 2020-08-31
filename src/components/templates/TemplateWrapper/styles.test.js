import React from 'react';
import { Wrapper } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('templates / templateWraper', () => {
  it('templateWraper', () => {
    const timerStyles = renderer.create(<Wrapper />).toJSON();
    expect(timerStyles).toMatchSnapshot();
  });
});
