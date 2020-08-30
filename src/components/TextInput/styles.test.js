import React from 'react';
import { LabelText, InpuText, SpanError, InputContainer } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('TextInput / Styles', () => {
  it('should test the styled-component LabelText', () => {
    const labelStyles = renderer.create(<LabelText />).toJSON();
    expect(labelStyles).toMatchSnapshot();
    expect(labelStyles).toHaveStyleRule('color', 'var(--grey)');
  });
  it('should test the styled-component InputContainer', () => {
    const labelStyles = renderer.create(<InputContainer />).toJSON();
    expect(labelStyles).toMatchSnapshot();
    expect(labelStyles).toHaveStyleRule('flex-direction', 'column');
  });
  it('should test the styled-component SpanError', () => {
    const labelStyles = renderer.create(<SpanError />).toJSON();
    expect(labelStyles).toMatchSnapshot();
    expect(labelStyles).toHaveStyleRule('color', 'var(--error)');
  });
  it('should test the styled-component InpuText', () => {
    const inputStyles = renderer
      .create(<InpuText colorFocus={'#DDD888'} />)
      .toJSON();
    expect(inputStyles).toMatchSnapshot();
    expect(inputStyles).toHaveStyleRule('border-color', '#DDD888', {
      modifier: ':hover',
    });
  });
});
