import API, { BaseGendpoint } from '.';

describe('API INSTANCE', () => {
  it('API Defined', () => {
    expect(API).toBeDefined();
  });
  it('API Timeout 10s', () => {
    expect(API.defaults.timeout).toBe(10000);
  });
});

describe('Enpoints cluster', () => {
  it('BaseGendpoint Defined', () => {
    expect(BaseGendpoint).toBeDefined();
  });
});
