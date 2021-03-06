import { renderHook, act } from '@testing-library/react-hooks';
import { useFormFields, useFormTextField } from './useFormFields';
import { emailValidation } from '../validations';
import { ERROR_VALID_EMAIL } from '../consts';
describe('Forms | useFormFields', () => {
  it('useFormFields Defined', () => {
    expect(useFormFields).toBeDefined();
  });
  it('useFormFields Change values', () => {
    const { result } = renderHook(() =>
      useFormFields(
        { email: '', pw: '' },
        { email: emailValidation, pw: () => {} }
      )
    );
    expect(result.current.formFields).toEqual({ email: '', pw: '' });
    let emailChangeHandler = result.current.createChangeHandler('email');
    expect(typeof emailChangeHandler).toBe('function');
    act(() => emailChangeHandler({ target: { value: 'lalala@gmai.com' } }));
    expect(result.current.formFields).toEqual({
      email: 'lalala@gmai.com',
      pw: '',
    });
    expect(result.current.errors.email).toBeFalsy();
    let pwChangeHandler = result.current.createChangeHandler('pw');
    expect(typeof pwChangeHandler).toBe('function');
    act(() => pwChangeHandler({ target: { value: 'adminadmin' } }));
    expect(result.current.formFields).toEqual({
      email: 'lalala@gmai.com',
      pw: 'adminadmin',
    });
    act(() => emailChangeHandler({ target: { value: 'lalala' } }));
    expect(result.current.formFields).toEqual({
      email: 'lalala',
      pw: 'adminadmin',
    });
    expect(result.current.errors.email).toBe(ERROR_VALID_EMAIL);
  });
});
describe('Forms | useFormTextField', () => {
  it('useFormTextField Defined', () => {
    expect(useFormTextField).toBeDefined();
  });
  it('useFormTextField returns types', () => {
    const { result } = renderHook(() => useFormTextField());
    expect(typeof result.current.value).toBe('string');
    expect(typeof result.current.onChange).toBe('function');
  });
  it('useFormTextField Change value', () => {
    const { result } = renderHook(() => useFormTextField());
    expect(result.current.value).toBe('');
    act(() => {
      result.current.onChange({ target: { value: 'Hello' } });
    });
    expect(result.current.value).toBe('Hello');
  });
  it('useFormTextField Change value Validation', () => {
    const { result } = renderHook(() => useFormTextField('', emailValidation));
    expect(result.current.value).toBe('');
    act(() => {
      result.current.onChange({ target: { value: 'Hello' } });
    });
    expect(result.current.value).toBe('Hello');
    expect(result.current.error).toBe(ERROR_VALID_EMAIL);
    act(() => {
      result.current.onChange({ target: { value: 'almero@gmail.com' } });
    });
    expect(result.current.value).toBe('almero@gmail.com');
    expect(result.current.error).toBeFalsy();
  });
});
