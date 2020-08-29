import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SwatchesPicker } from 'react-color';

import {
  InputSwatch,
  InputPopOver,
  InputCover,
  InputColor,
  LabelInput,
  ColorContainerInput,
} from './styles';
const ColorInput = ({ label, colorSelect, logical }) => {
  const [color, setColor] = useState(colorSelect);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.hex);
    logical.onChange({ target: { value: color.hex } });
  };

  return (
    <ColorContainerInput direction={'row'}>
      <LabelInput>{label}</LabelInput>
      <InputSwatch onClick={handleClick}>
        <InputColor color={color} />
      </InputSwatch>
      {displayColorPicker ? (
        <InputPopOver>
          <InputCover onClick={handleClose} />
          <SwatchesPicker color={color} onChange={handleChange} />
        </InputPopOver>
      ) : null}
    </ColorContainerInput>
  );
};
ColorInput.defaultProps = {
  label: 'Color Input',
  colorSelect: '#125E68',
};

ColorInput.propTypes = {
  label: PropTypes.string,
  colorSelect: PropTypes.string,
  logical: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }).isRequired,
};
export default ColorInput;
