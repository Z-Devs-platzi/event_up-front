import React from 'react';
import { CountTimer, SimpleLavel } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('TimerLabel / Styles', () => {
  it('CountTimer Default', () => {
    const counterStyles = renderer.create(<CountTimer />).toJSON();
    expect(counterStyles).toMatchSnapshot();
    expect(counterStyles).toHaveStyleRule('color', 'var(--secondary-color)');
    expect(counterStyles).toHaveStyleRule('font-size', '96px');
  });
  it('SimpleLavel Default', () => {
    const labelStyles = renderer.create(<SimpleLavel />).toJSON();
    expect(labelStyles).toMatchSnapshot();
    expect(labelStyles).toHaveStyleRule('color', 'var(--light-green)');
    expect(labelStyles).toHaveStyleRule('font-size', '23px');
  });
  it('CountTimer Custom', () => {
    const counterStyles = renderer
      .create(<CountTimer color={'#A44F44'} size={70} />)
      .toJSON();
    expect(counterStyles).toMatchSnapshot();
    expect(counterStyles).toHaveStyleRule('color', '#A44F44');
    expect(counterStyles).toHaveStyleRule('font-size', '70px');
  });
  it('SimpleLavel Custom', () => {
    const labelStyles = renderer
      .create(<SimpleLavel color={'#A88FFF'} size={10} />)
      .toJSON();
    expect(labelStyles).toMatchSnapshot();
    expect(labelStyles).toHaveStyleRule('color', '#A88FFF');
    expect(labelStyles).toHaveStyleRule('font-size', '10px');
  });
});
