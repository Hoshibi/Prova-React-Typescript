import React from 'react';

import './styles.css';

const FormContainer: React.FC = () => {
    return (
        <div className="FormContainer">
          <h1>Authentication</h1>
          <div className='formDiv'>
            <form>
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Password"></input>
              <p>I forget my password</p>
              <button className='btnGreen'>Log In</button>
            </form>
          </div>
          <button className='btnGray'>Sign Up</button>
        </div>
    );
};

export default FormContainer;