import { renderHook, act } from '@testing-library/react-hooks';
import { useTimer } from './useTimer';
const globalDate = Date;

beforeAll(() => {
  Date.now = jest.fn(() => new Date(Date.UTC(2020, 0, 8, 10, 30)).valueOf());
});

afterAll(() => {
  global.Date = globalDate;
  jest.clearAllTimers();
});
describe('UseTimer', () => {
  it('UseTimer Defined', () => {
    expect(useTimer).toBeDefined();
  });
  it('UseTimer setUP', () => {
    jest.useFakeTimers();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const { result } = renderHook(() => useTimer(tomorrow));

    expect(result.current.timeLeft).toEqual({
      days: 0,
      hours: 23,
      minutes: 59,
      seconds: 59,
    });
  });
  it('UseTimer time Pass', () => {
    jest.useFakeTimers();
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const { result } = renderHook(() => useTimer(tomorrow));
    act(() => jest.advanceTimersByTime(10000));
    expect(result.current.timeLeft).toEqual({
      days: 0,
      hours: 23,
      minutes: 59,
      seconds: 59,
    });
  });
});
