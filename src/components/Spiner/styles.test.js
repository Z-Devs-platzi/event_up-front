import React from 'react';
import { SpinerContainer } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Spiner / Styles', () => {
  it('SpinerContainer Default', () => {
    const spinerStyles = renderer.create(<SpinerContainer />).toJSON();
    expect(spinerStyles).toMatchSnapshot();
    expect(spinerStyles).toHaveStyleRule('color', 'var(--grey)');
    expect(spinerStyles).toHaveStyleRule('font-size', '20px');
    expect(spinerStyles).toHaveStyleRule('width', '20px');
    expect(spinerStyles).toHaveStyleRule('height', '20px');
  });
  it('SpinerContainer Custom', () => {
    const spinerStyles = renderer
      .create(<SpinerContainer color={'#A44F44'} size={70} />)
      .toJSON();
    expect(spinerStyles).toMatchSnapshot();
    expect(spinerStyles).toHaveStyleRule('color', '#A44F44');
    expect(spinerStyles).toHaveStyleRule('font-size', '70px');
    expect(spinerStyles).toHaveStyleRule('width', '70px');
    expect(spinerStyles).toHaveStyleRule('height', '70px');
  });
});
