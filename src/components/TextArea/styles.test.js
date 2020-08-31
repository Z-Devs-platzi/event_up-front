import React from 'react';
import { LabelText, TextareaInput, SpanError, InputContainer } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('TextArea / Styles', () => {
  it('TextArea Styles / InputContainer', () => {
    const container = renderer.create(<InputContainer />).toJSON();
    expect(container).toMatchSnapshot();
    expect(container).toHaveStyleRule('display', 'flex');
  });
  it('TextArea Styles / LabelText', () => {
    const label = renderer.create(<LabelText />).toJSON();
    expect(label).toMatchSnapshot();
    expect(label).toHaveStyleRule('color', 'var(--grey)');
  });
  it('TextArea Styles / TextareaInput', () => {
    const inputElement = renderer.create(<TextareaInput />).toJSON();
    expect(inputElement).toMatchSnapshot();
    expect(inputElement).toHaveStyleRule('padding', '0.75rem 1rem');
  });
  it('TextArea Styles / SpanError', () => {
    const errorMessage = renderer.create(<SpanError />).toJSON();
    expect(errorMessage).toMatchSnapshot();
    expect(errorMessage).toHaveStyleRule('color', 'var(--error)');
  });
});
