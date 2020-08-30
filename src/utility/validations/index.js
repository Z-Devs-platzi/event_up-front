import {
  ERROR_REQUIRED_EMAIL,
  ERROR_VALID_EMAIL,
  ERROR_REQUIRED_PW,
  ERROR_VALID_PW,
  ERROR_MATCH,
  ERROR_REQUIRED,
} from '../consts';
export const emailValidation = (values) => {
  let error = null;
  if (!values) {
    error = ERROR_REQUIRED_EMAIL;
  } else if (!/\S+@\S+\.\S+/.test(values)) {
    error = ERROR_VALID_EMAIL;
  }
  return error;
};
export const passwordValidation = (values) => {
  let error = null;
  if (!values) {
    error = ERROR_REQUIRED_PW;
  } else if (values.length < 6) {
    error = ERROR_VALID_PW;
  }
  return error;
};
export const requiredValidation = (values) => {
  let error = null;
  if (!values) {
    error = ERROR_REQUIRED;
  }
  return error;
};
/**
 *
 * @param {String} match the string to be matched
 *  const matchMesage = matchValidation('This si my passwod');
 * @return {Function}
 * @param {String} value the value to mathc
 *  matchMesage(pw)
 */
export const matchValidation = (object) => (match) => {
  let error = null;
  if (object.value !== match) {
    error = ERROR_MATCH;
  }
  return error;
};
