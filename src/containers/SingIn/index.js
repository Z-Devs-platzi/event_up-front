import React from 'react';
import sha1 from 'js-sha1';
import { Link } from 'react-router-dom';
import { CenterDiv, CardDiv } from '../../styles/GlobalStyles';
import { useAuthState } from '../../context/auth-context';
import { useFormTextField } from '../../utility/hooks/useFormFields';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Spiner from '../../components/Spiner';
import LandingWraper from '../../components/LandingWraper';
import { emailValidation } from '../../utility/validations';
const SingIn = () => {
  let { login, data } = useAuthState();

  const emailField = useFormTextField('', emailValidation);
  const passwordField = useFormTextField();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(emailField.value, sha1(passwordField.value));
  };

  return (
    <>
      <LandingWraper>
        <form onSubmit={handleSubmit}>
          <CardDiv>
            <CenterDiv>
              <TextInput
                errorMessage={emailField.error}
                label='Email'
                logical={emailField}
                type={'email'}
                id={'SI_email'}
              />
              <TextInput
                label='Password'
                logical={passwordField}
                type={'password'}
                id={'SI_password'}
              />
              <Button type='submit'>
                {data.status === 'pending' ? <Spiner /> : 'Sing In'}
              </Button>
              <span>
                Don’t have an account? <Link to='/signup'> Sign Up </Link>
              </span>
            </CenterDiv>
          </CardDiv>
        </form>
      </LandingWraper>
    </>
  );
};
export default SingIn;
