import React from 'react';
import { Buttons } from './styles';
import { create } from 'react-test-renderer';

describe('styled-components for the Button component', () => {
  it('should test the styled-component', () => {
    const buttonStyles = create(<Buttons />);
    expect(buttonStyles.toJSON()).toMatchSnapshot();
  });
});
