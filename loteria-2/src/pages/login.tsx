import React from 'react';

//Components
import FormContainer from '../components/FormContainer';
import TextAuth from '../components/TextAuth';
import Input from '../components/Input';

function Login() {
  return (
    <>
      <TextAuth />
      <FormContainer title = "Authentication" btnGreenTitle = "Log In" btnGrayTitle = "Sign Up" back = {false}>
        <Input type = "email" placeholder = "Email" />
        <Input type = "password" placeholder = "Senha" />
        <p>I forget my password</p>
      </FormContainer>
    </>
  );
}

export default Login;