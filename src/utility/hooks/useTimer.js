import { useEffect, useState } from 'react';
import { calculateTimeLeft } from '../dates';

export const useTimer = (date) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(date));
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });
  return { timeLeft };
};
