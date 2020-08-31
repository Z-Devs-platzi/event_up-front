import { useCallback, useState } from 'react';
// based on https://blog.logrocket.com/forms-in-react-in-2020/
/**
 * 
 * @param {String} initialValue
 * const emailField = useFormTextField();
 * <input
          type="email"
          id="email"
          {...emailField}
        />
    @returns {Object} {value: String, onChange:Function}
 */
export const useFormTextField = (initialValue = '', validate = () => '') => {
  const [error, setError] = useState('');
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e) => {
      setError(validate(e.target.value));
      return setValue(e.target.value);
    },
    [validate]
  );
  return { value, onChange, error };
};
export const useFormFileField = () => {
  const [value, setValue] = useState();

  const onChange = useCallback((e) => {
    return setValue(e.target.files[0]);
  }, []);
  return { value, onChange };
};

/**
 * 
 * @param {Object} initialValues 
 *   const { formFields, createChangeHandler } = useFormFields({
    email: "",
    password: "",
  });
  <input
          type="email"
          id="email"
          value={formFields.email}
          onChange={createChangeHandler("email")}
        />
 */
export const useFormFields = (initialValues, validations) => {
  const [errors, setErrors] = useState({});
  const [formFields, setFormFields] = useState(initialValues);
  // custer of handler event
  const createChangeHandler = (key) => (e) => {
    const value = e.target.value;
    setErrors((prev) => ({ ...prev, [key]: validations[key](value) }));
    setFormFields((prev) => ({ ...prev, [key]: value }));
  };
  return { formFields, createChangeHandler, errors };
};
