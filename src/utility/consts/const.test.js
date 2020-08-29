import {
  API_URL,
  ERROR_REQUIRED_EMAIL,
  ERROR_VALID_EMAIL,
  ERROR_VALID_PW,
  ERROR_REQUIRED_PW,
  ERROR_MATCH,
} from '.';

describe('Consts', () => {
  it('API_URL Defined', () => {
    expect(API_URL).toBeDefined();
  });
  it('ERROR_REQUIRED_EMAIL Defined', () => {
    expect(ERROR_REQUIRED_EMAIL).toBeDefined();
  });
  it('ERROR_VALID_EMAIL Defined', () => {
    expect(ERROR_VALID_EMAIL).toBeDefined();
  });
  it('ERROR_REQUIRED_EMAIL Defined', () => {
    expect(ERROR_VALID_PW).toBeDefined();
  });
  it('ERROR_VALID_EMAIL Defined', () => {
    expect(ERROR_REQUIRED_PW).toBeDefined();
  });
  it('ERROR_MATCH Defined', () => {
    expect(ERROR_MATCH).toBeDefined();
  });
});
