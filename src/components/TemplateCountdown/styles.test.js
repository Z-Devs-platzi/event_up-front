import React from 'react';
import { TemplateCountdown } from './styles';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('TemplateCountdown / Styles', () => {
  test('the styled-component for TemplateCountdown', () => {
    const countdownDefault = renderer.create(<TemplateCountdown />).toJSON();
    expect(countdownDefault).toMatchSnapshot();
    expect(countdownDefault).toHaveStyleRule('position', 'relative');
  });
});
