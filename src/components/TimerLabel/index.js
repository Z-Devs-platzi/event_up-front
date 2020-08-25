import React from 'react';
import PropTypes from 'prop-types';
import { useTimer } from '../../utility/hooks/useTimer';
import { SpanTimer } from './styles';

const TimerLabel = ({ date, size, color, showlabel }) => {
  let { timeLeft } = useTimer(date);
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    let label = showlabel
      ? ` ${timeLeft[interval]} ${interval.toLocaleUpperCase()} `
      : `${timeLeft[interval]} ${interval[0].toLocaleUpperCase()}`;
    timerComponents.push(
      <SpanTimer size={size} color={color} key={interval}>
        {label}
      </SpanTimer>
    );
  });
  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <SpanTimer size={size}>Time Is Up!</SpanTimer>
      )}
    </div>
  );
};
const tomorrow = new Date();
TimerLabel.defaultProps = {
  date: tomorrow.setDate(tomorrow.getDate() + 1),
  size: 1,
  color: '#000000',
  showlabel: true,
};

TimerLabel.propTypes = {
  date: PropTypes.number.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  showlabel: PropTypes.bool,
};

export default TimerLabel;
