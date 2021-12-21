import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//Components
import FormContainer from '../components/FormContainer';
import TextAuth from '../components/TextAuth';
import Input from '../components/Input';
import ResetPasswordLink from '../components/ResetPasswordLink'

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    let url = 'http://127.0.0.1:3333/login';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          navigate('/home');
          return res.json();
        } else {
          return res.json().then(() => {
            var errorMessage = "";

            function isValidEmail(email:string){
              var regex = new RegExp('^[\\w+.]+@[\\w]+\\.(?:\\w{2,})(?:\\.\\w{2})?$');
              console.log(regex.test(email));
              return regex.test(email);
            }

            if(email.trim().length === 0) { errorMessage='Campo email vazio! Insira um email' }
            if(password.trim().length === 0) { errorMessage='Campo password vazio! Insira uma senha' }
            if(!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0) { errorMessage='Insira um email válido. Exemplo: exemplo@luby.com.br' }
            if(!!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0) { errorMessage='Email e/ou senha incorreta! Verifique novamente' }
            console.log("Passou: ",errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <TextAuth />
      <FormContainer title = "Authentication" btnGreenTitle = "Log In" btnGrayTitle = "Sign Up" back = {false} onSubmit={submitHandler} isLoading={isLoading} link='/registration'>
        <Input type = "email" placeholder = "Email" onChange={emailChangeHandler} value={email}/>
        <Input type = "password" placeholder = "Senha" onChange={passwordChangeHandler} value={password}/>
        <ResetPasswordLink>I forget my password</ResetPasswordLink>
      </FormContainer>
    </>
  );
}

export default Login;