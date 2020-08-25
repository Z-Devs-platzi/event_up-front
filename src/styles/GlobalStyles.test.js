import React from 'react';
import { GlobalStyle } from './GlobalStyles';
import { create } from 'react-test-renderer';

describe('Global styles with styled-components', () => {
  it('should test the component', () => {
    const globalStyles = create(<GlobalStyle />);
    expect(globalStyles.toJSON()).toMatchSnapshot();
  });
});
