import React from 'react';
import { SponsorRow } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Spiner / Styles', () => {
  it('SpinerContainer Default', () => {
    const spinerStyles = renderer.create(<SponsorRow />).toJSON();
    expect(spinerStyles).toMatchSnapshot();
    expect(spinerStyles).toHaveStyleRule('justify-content', 'space-evenly');
    expect(spinerStyles).toHaveStyleRule('display', 'flex');
  });
});
