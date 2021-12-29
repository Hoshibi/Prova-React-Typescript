import { useState } from 'react';

import FormContainer from '../components/FormContainer';
import TextAuth from '../components/TextAuth';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Registration() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const nameChangeHandler = ( event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  //Submit Handler
  const submitHandler = (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    let url = 'http://127.0.0.1:3333/user/create';
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);

        if (res.ok) {
          toast.success('Cadastro realiza com sucesso!', {position: "top-right", autoClose: 10000, closeOnClick: true, pauseOnHover: true});
          setName('');
          setEmail('');
          setPassword('');
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
            if(password.trim().length === 0) { errorMessage='Campo password vazio! Insira uma senha' }
            if(name.trim().length === 0) { errorMessage='Campo name vazio! Insira uma nome' }
            if(email.trim().length === 0 && password.trim().length === 0 && name.trim().length === 0) { errorMessage='Todos os campos vazios! Insira os dados' }
            if(!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0 && name.trim().length > 0) { 
              errorMessage='Insira um email válido. Exemplo: exemplo@luby.com.br' 
            }
            if(!!isValidEmail(email) && email.trim().length > 0 && password.trim().length > 0 && name.trim().length > 0) { 
              errorMessage='Já existe uma conta com esse email! Insira outro email.' 
            }
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
      <FormContainer title = "Registration" btnGreenTitle = "Register" btnGrayTitle = "Back" back = {true}onSubmit={submitHandler} isLoading={isLoading} link='/'>
        <Input type = "text" placeholder = "Name" onChange={nameChangeHandler} value={name}/>
        <Input type = "email" placeholder = "Email" onChange={emailChangeHandler} value={email}/>
        <Input type = "password" placeholder = "Password" onChange={passwordChangeHandler} value={password}/>
      </FormContainer>
    </>
  );
}

export default Registration;