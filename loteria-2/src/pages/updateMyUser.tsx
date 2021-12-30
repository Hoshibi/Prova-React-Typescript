import React, { useEffect, useState } from 'react';
import userServices from '@shared/services/user';

import { Navbar, CardUpdateUser } from '@components/index';

function UpdateMyUser() {

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
        <Navbar inHome={false} inAccount={false}></Navbar>
        <CardUpdateUser name={`${name}`} email={`${email}`}/>
    </>
  );
}

export default UpdateMyUser;