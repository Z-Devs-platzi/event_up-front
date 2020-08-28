export const emailValidation = (values) => {
  let error = null;
  if (!values) {
    error = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values)) {
    error = 'Email address is invalid';
  }
  return error;
};
export const passwordValidation = (values) => {
  let error = null;
  if (!values) {
    error = 'Password required';
  } else if (values.length < 6) {
    error = 'Password need more caracters';
  }
  return error;
};
