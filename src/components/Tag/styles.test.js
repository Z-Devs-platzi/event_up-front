import React from 'react';
import { StatusTag } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Tag / Styles', () => {
  it('should test the styled-component Tag default', () => {
    const tagDefault = renderer.create(<StatusTag />).toJSON();
    expect(tagDefault).toMatchSnapshot();
    expect(tagDefault).toHaveStyleRule(
      'background-color',
      'var(--primary-color)'
    );
  });
  it('should test the styled-component Tag published', () => {
    const tagPublished = renderer
      .create(<StatusTag status='published' />)
      .toJSON();
    expect(tagPublished).toMatchSnapshot();
    expect(tagPublished).toHaveStyleRule(
      'background-color',
      'var(--published)'
    );
  });
  it('should test the styled-component Tag published', () => {
    const tagFinished = renderer
      .create(<StatusTag status='finished' />)
      .toJSON();
    expect(tagFinished).toMatchSnapshot();
    expect(tagFinished).toHaveStyleRule(
      'background-color',
      'var(--light-green)'
    );
  });
});
