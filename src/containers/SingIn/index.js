import React from 'react';
import { useAuthState } from '../../context/auth-context';
import { useFormTextField } from '../../utility/hooks/useFormFields';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Spiner from '../../components/Spiner';
const SingIn = () => {
  let { login, data } = useAuthState();

  const emailField = useFormTextField();
  const passwordField = useFormTextField();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(emailField.value, passwordField.value);
  };

  return (
    <>
      <section>
        <h2>Sing In </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <TextInput
              label='Email'
              logical={emailField}
              type={'email'}
              id={'SI_email'}
            />
          </div>
          <div>
            <TextInput
              label='Password'
              logical={passwordField}
              type={'password'}
              id={'SI_password'}
            />
          </div>
          <Button type='submit'>
            {data.status === 'pending' ? <Spiner /> : 'Sing In'}
          </Button>
        </form>
      </section>
    </>
  );
};
export default SingIn;
