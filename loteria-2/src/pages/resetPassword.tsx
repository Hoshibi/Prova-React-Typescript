import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { FormContainer, TextAuth, Input } from '../components/';

function ResetPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    let url = 'http://127.0.0.1:3333/reset';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          toast.success('Link enviado para o email com sucesso!', {position: "top-right", autoClose: 10000, closeOnClick: true, pauseOnHover: true});
          setEmail('');
          navigate('/');
          return res.json();
        } else {
          return res.json().then(() => {
            var errorMessage = "";

            function isValidEmail(email:string){
              var regex = new RegExp('^[\\w+.]+@[\\w]+\\.(?:\\w{2,})(?:\\.\\w{2})?$');
              return regex.test(email);
            }

            if(email.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
            if(!isValidEmail(email) && email.trim().length > 0 ) { errorMessage='Insira um email válido. Exemplo: exemplo@luby.com.br' }
            if(!!isValidEmail(email) && email.trim().length > 0 ) { errorMessage='Email incorreta! Verifique novamente' }
            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        toast.error(err.message, {position: "top-right", autoClose: 10000, closeOnClick: true, pauseOnHover: true});
      });
  };

  return (
    <>
      <TextAuth />
      <FormContainer title ="Reset password" btnGreenTitle="Send link" btnGrayTitle="Back " back={true} onSubmit={submitHandler} isLoading={isLoading} link='/'>
        <Input type = "email" placeholder = "Email" onChange={emailChangeHandler} value={email}/>
      </FormContainer>
    </>
  );
}

export default ResetPassword;