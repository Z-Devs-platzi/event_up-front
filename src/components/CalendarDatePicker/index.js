import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { LabelText, DateInput } from './styles';
import PropTypes from 'prop-types';

// import { LabelText } from './InputDateTime.styles';
import 'react-datepicker/dist/react-datepicker.css';

const CustomField = ({ value, onClick }) => (
  <DateInput value={value} onClick={onClick} />
);

const InputDateTime = ({ eventDate, id }) => {
  const [startDate, setStartDate] = useState(eventDate && null);
  return (
    <>
      <LabelText htmlFor={id}>Date / Time</LabelText>
      <br />
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
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
};

InputDateTime.propTypes = {
  eventDate: PropTypes.string,
  id: PropTypes.string.isRequired,
};

InputDateTime.defaultProps = {
  eventDate: new Date(),
};

export default InputDateTime;
