import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { LabelText, DateInput } from './styles';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';

const CustomField = ({ value, onClick, error }) => (
  <DateInput value={value} onClick={onClick} />
);

const InputDateTime = ({ id, logical }) => {
  const [startDate, setStartDate] = useState(logical.value);

  const handlerChange = (date) => {
    setStartDate(date);
    logical.onChange({ target: { value: date } });
  };
  return (
    <>
      <LabelText htmlFor={id}>Date / Time</LabelText>
      <br />
      <DatePicker
        selected={startDate}
        onChange={handlerChange}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={30}
        timeCaption='time'
        dateFormat='MMM dd, yyyy / HH:mm'
        customInput={<CustomField />}
      />
    </>
  );
};

CustomField.propTypes = {
  value: PropTypes.any,
  onClick: PropTypes.func,
  error: PropTypes.string,
};

InputDateTime.propTypes = {
  id: PropTypes.string.isRequired,
  logical: PropTypes.shape({
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
  }).isRequired,
};

InputDateTime.defaultProps = {
  eventDate: null,
};

export default InputDateTime;
