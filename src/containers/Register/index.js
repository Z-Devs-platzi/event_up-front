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
import {
  emailValidation,
  passwordValidation,
  matchValidation,
} from '../../utility/validations';
const Register = () => {
  let { register, data } = useAuthState();
  const emailField = useFormTextField('', emailValidation);
  const passwordField = useFormTextField('', passwordValidation);

  let passwordFieldRepeat = useFormTextField(
    '',
    matchValidation(passwordField)
  );
  const orgField = useFormTextField();
  const nameField = useFormTextField();
  const userNameField = useFormTextField();
  const preparData = () => {
    let Data = {
      email: emailField.value,
      password: sha1(passwordField.value),
      organization: orgField.value,
      name: nameField.value,
      username: userNameField.value,
    };
    return Data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailField.error || passwordField.error || passwordFieldRepeat.error) {
      return;
    }
    register(preparData());
  };

  return (
    <>
      <LandingWraper>
        <form onSubmit={handleSubmit}>
          <CardDiv>
            <CenterDiv>
              <TextInput
                label='Name'
                logical={nameField}
                type={'text'}
                id={'SU_name'}
              />
              <TextInput
                label='User Name'
                logical={userNameField}
                type={'text'}
                id={'SU_Username'}
              />
              <TextInput
                errorMessage={emailField.error}
                label='Email'
                logical={emailField}
                type={'email'}
                id={'SU_email'}
              />
              <TextInput
                label='Organization'
                logical={orgField}
                type={'text'}
                id={'SU_orgs'}
              />
              <TextInput
                label='Password'
                errorMessage={passwordField.error}
                logical={passwordField}
                type={'password'}
                id={'SU_password'}
              />
              <TextInput
                label='Repeat password'
                errorMessage={passwordFieldRepeat.error}
                logical={passwordFieldRepeat}
                type={'password'}
                id={'SU_password_Repeat'}
              />

              <Button type='submit'>
                {data.status === 'pending' ? <Spiner /> : 'Sing Up'}
              </Button>
              <span>
                Already have an account? <Link to='/signin'> Sign In </Link>
              </span>
            </CenterDiv>
          </CardDiv>
        </form>
      </LandingWraper>
    </>
  );
};
export default Register;
