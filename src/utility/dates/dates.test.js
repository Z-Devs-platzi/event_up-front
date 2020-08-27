import { calculateTimeLeft } from './index';

jest.useFakeTimers();
const globalDate = Date;

beforeAll(() => {
  Date.now = jest.fn(() => new Date(Date.UTC(2020, 0, 8, 10, 30)).valueOf());
});

afterAll(() => {
  global.Date = globalDate;
});

describe('Dates | calculateTimeLeft', () => {
  it('calculateTimeLeft Defined', () => {
    expect(calculateTimeLeft).toBeDefined();
    expect(typeof calculateTimeLeft).toBe('function');
  });
});
test('Diference on 1 day', () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  expect(calculateTimeLeft(tomorrow)).toEqual({
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
});
