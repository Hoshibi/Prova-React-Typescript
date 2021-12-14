import React from 'react';

import './style.css';

//Components
import FormContainer from '../../components/FormContainer';
import TextAuth from '../../components/TextAuth';

function Login() {
  return (
    <>
      <TextAuth />
      <FormContainer />
    </>
  );
}

export default Login;