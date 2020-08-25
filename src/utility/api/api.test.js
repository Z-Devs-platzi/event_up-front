import API, { BaseGenpoint } from '.';

describe('API INSTANCE', () => {
  it('API Defined', () => {
    expect(API).toBeDefined();
  });
  it('API Timeout 10s', () => {
    expect(API.defaults.timeout).toBe(10000);
  });
});

describe('Enpoints cluster', () => {
  it('BaseGenpoint Defined', () => {
    expect(BaseGenpoint).toBeDefined();
  });
});
