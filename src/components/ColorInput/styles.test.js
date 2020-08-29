import React from 'react';
import renderer from 'react-test-renderer';
import {
  InputSwatch,
  InputPopOver,
  InputCover,
  InputColor,
  LabelInput,
  ColorContainerInput,
} from './styles';
import 'jest-styled-components';
describe('test styled-components for the InputSwatch component', () => {
  it('should test the styled-component file', () => {
    const styles = renderer.create(<InputSwatch />).toJSON();
    expect(styles).toMatchSnapshot();
  });
  it('should test the styled-component file', () => {
    const styles = renderer.create(<InputPopOver />).toJSON();
    expect(styles).toMatchSnapshot();
  });
  it('should test the styled-component file', () => {
    const styles = renderer.create(<InputCover />).toJSON();
    expect(styles).toMatchSnapshot();
  });
  it('should test the styled-component file', () => {
    const styles = renderer.create(<InputColor />).toJSON();
    expect(styles).toMatchSnapshot();
  });
  it('should test the styled-component file', () => {
    const styles = renderer.create(<LabelInput />).toJSON();
    expect(styles).toMatchSnapshot();
  });
  it('should test the styled-component file', () => {
    const styles = renderer.create(<ColorContainerInput />).toJSON();
    expect(styles).toMatchSnapshot();
  });
});
