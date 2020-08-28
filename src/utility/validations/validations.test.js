import { emailValidation, passwordValidation, matchValidation } from './index';
import {
  ERROR_VALID_EMAIL,
  ERROR_REQUIRED_EMAIL,
  ERROR_VALID_PW,
  ERROR_REQUIRED_PW,
  ERROR_MATCH,
} from '../consts';

describe('Utility Validations Email', () => {
  it('should return Requiered error', () => {
    let str = '';
    expect(emailValidation(str)).toBe(ERROR_REQUIRED_EMAIL);
  });

  it('should return a No format email', () => {
    let str = 'hello';
    expect(emailValidation(str)).toBe(ERROR_VALID_EMAIL);
  });
  it('should return no erro', () => {
    let str = 'hello@email.com';
    expect(emailValidation(str)).toBeFalsy();
  });
});
describe('Utility Validations Password', () => {
  it('should return Requiered error', () => {
    let str = '';
    expect(passwordValidation(str)).toBe(ERROR_REQUIRED_PW);
  });

  it('should return a No Length error', () => {
    let str = 'hello';
    expect(passwordValidation(str)).toBe(ERROR_VALID_PW);
  });
  it('should return no erro', () => {
    let str = 'hello World';
    expect(passwordValidation(str)).toBeFalsy();
  });
});
describe('Utility Validations Match', () => {
  let check = { value: 'Hello World' };
  const matchMesage = matchValidation(check);
  it('should return No Match error', () => {
    let str = '';
    expect(matchMesage(str)).toBe(ERROR_MATCH);
  });
  it('should return No Match error', () => {
    let str = 'Hello World';
    expect(matchMesage(str)).toBeFalsy();
  });
});
