import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

// import { LabelText } from './InputDateTime.styles';
import 'react-datepicker/dist/react-datepicker.css';

const InputDateTime = ({ eventDate }) => {
  const [startDate, setStartDate] = useState(eventDate);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      timeFormat='HH:mm'
      timeIntervals={30}
      timeCaption='time'
      dateFormat='MMM dd, yyyy / HH:mm'
    />
  );
};

InputDateTime.propTypes = {
  eventDate: PropTypes.string,
};

InputDateTime.defaultProps = {
  eventDate: new Date(),
};

export default InputDateTime;
