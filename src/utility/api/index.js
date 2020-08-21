const API_URL = process.env.REACT_APP_API_URL;

export const API = () => {
  console.log(
    `%c ${API_URL} is the current API URL`,
    'color:white; background-color: green;'
  );
};
