import React from 'react';
import { CountdownSection, Phrase, Timer } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('templates / templateCoundown', () => {
  it('templateCoundown Default', () => {
    const timerStyles = renderer.create(<CountdownSection />).toJSON();
    expect(timerStyles).toMatchSnapshot();
    expect(timerStyles).toHaveStyleRule('position', 'relative');
    expect(timerStyles).toHaveStyleRule('width', '100vw');
  });
  it('templateCoundown Phrase', () => {
    const timerStyles = renderer.create(<Phrase />).toJSON();
    expect(timerStyles).toMatchSnapshot();
    expect(timerStyles).toHaveStyleRule('opacity', '0.2');
    expect(timerStyles).toHaveStyleRule('color', 'var(--light-green)');
  });
  it('templateCoundown Timer', () => {
    const timerStyles = renderer.create(<Timer />).toJSON();
    expect(timerStyles).toMatchSnapshot();
    expect(timerStyles).toHaveStyleRule('position', 'absolute');
    expect(timerStyles).toHaveStyleRule('bottom', '60px');
  });
});
