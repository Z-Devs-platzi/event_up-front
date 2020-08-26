import React from 'react';
import PropTypes from 'prop-types';
import { useTimer } from '../../utility/hooks/useTimer';
import { CountTimer, SimpleLavel } from './styles';
import { CenterDiv } from '../../styles/GlobalStyles';

const TimerLabel = ({
  date,
  sizeTime,
  sizeLabel,
  colorTime,
  showLabel,
  colorLabel,
}) => {
  let { timeLeft } = useTimer(date);
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <CenterDiv>
        <CountTimer size={sizeTime} color={colorTime} key={interval}>
          {timeLeft[interval]}
        </CountTimer>
        {showLabel ? (
          <SimpleLavel size={sizeLabel} color={colorLabel}>
            {interval.toLocaleUpperCase()}
          </SimpleLavel>
        ) : null}
      </CenterDiv>
    );
  });
  return (
    <CenterDiv direction={'row'}>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <CountTimer color={colorTime} size={sizeTime}>
          Time Is Up!
        </CountTimer>
      )}
    </CenterDiv>
  );
};
const tomorrow = new Date();
TimerLabel.defaultProps = {
  date: tomorrow.setDate(tomorrow.getDate() + 1),
  sizeTime: 96,
  sizeLabel: 23,
  colorTime: '#FFD43B',
  colorLabel: '#DBE7E8',
  showLabel: true,
};

TimerLabel.propTypes = {
  date: PropTypes.number.isRequired,
  sizeTime: PropTypes.number,
  sizeLabel: PropTypes.number,
  colorTime: PropTypes.string,
  colorLabel: PropTypes.string,
  showLabel: PropTypes.bool,
};

export default TimerLabel;
