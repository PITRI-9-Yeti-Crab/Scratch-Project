import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLocalLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/user/login', {email, password});
      console.log(response.data);
      //navigate to dash
      navigate("/dash");
    }
    catch(err){
      console.log(err);
    }
  }

  const handleLoginState = (val, label) => {
    switch (label) {
      case "email":
        setEmail(val);
        break;
      default:
        setPassword(val);
    }
  };

  return (
    <div className="login-form" >

        <Form className = "shadow p-3 mb-5 bg-white rounded" onSubmit = {handleLocalLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">


          <Button type="button" className = "btn btn-primary btn-lg btn-google"><img src="https://img.icons8.com/color/32/000000/google-logo.png" />Login with Google</Button>

            <Form.Label>Login with Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => handleLoginState(e.target.value, "email")}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control type="password" placeholder="Enter Password" value={password} onChange={(e) => handleLoginState(e.target.value)}/>
          </Form.Group>

          <div className="right-button">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>

      </Form>

    </div>

  )
}

export default UserLogin;
