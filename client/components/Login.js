import {React, useState} from 'react';
import axios from 'axios'; 

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/user/login', {email, password}); 
      console.log(response.data)
    }
    catch(err){
      console.log(err); 
    }
  }

  return (
    <>
    
    <h2>LOGIN</h2>

    <Button variant="primary" type="submit">
      Log In
    </Button>

    </>
  )
}

export default Login;
