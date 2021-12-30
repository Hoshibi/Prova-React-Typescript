import { Navbar, CardMyAccount } from '@components/index';
import userServices from '@shared/services/user';
import React, { useEffect, useState } from 'react';

function Account() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    userServices().myProfile().then(function (response:any) { 
      setName(response.data.name);
      setEmail(response.data.email);
    })
  },[email, name])
  
  return (
    <>
        <Navbar inHome={false} inAccount={true}></Navbar>
        <CardMyAccount name={`${name}`} email={`${email}`}/>
    </>
  );
}

export default Account;