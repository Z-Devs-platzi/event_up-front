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
export const useFormTextField = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    return setValue(e.target.value);
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
export const useFormFields = (initialValues) => {
  const [formFields, setFormFields] = useState(initialValues);
  // custer of handler event
  const createChangeHandler = (key) => (e) => {
    const value = e.target.value;
    setFormFields((prev) => ({ ...prev, [key]: value }));
  };
  return { formFields, createChangeHandler };
};
