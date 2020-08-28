import React from 'react';
import { LabelText, DateInput } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('CalendarDatePicker / Styles', () => {
  it('should test the styled-component LabelText', () => {
    const labelStyles = renderer.create(<LabelText />).toJSON();
    expect(labelStyles).toMatchSnapshot();
    expect(labelStyles).toHaveStyleRule('color', 'var(--grey)');
  });
  it('should test the styled-component DateInput', () => {
    const inputStyles = renderer
      .create(<DateInput colorFocus={'#DDD888'} />)
      .toJSON();
    expect(inputStyles).toMatchSnapshot();
    expect(inputStyles).toHaveStyleRule('border-color', '#DDD888', {
      modifier: ':hover',
    });
  });
});
