import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function UserSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // post new user credentials to db
  const handleLocalSignup = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/user/signup", {
        email: email,
        password: password,
      });
      // navigate to login
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignUpState = (val, label) => {
    switch (label) {
      case "email":
        setEmail(val);
        break;
      default:
        setPassword(val);
    }
  };

  return (
    <div className="signup-form">
      <Form
        className="shadow p-3 mb-5 bg-white rounded"
        onSubmit={handleLocalSignup}
      >
        <h4>Signup with Email</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => handleSignUpState(e.target.value, "email")}
          />
          <Form.Text className="text-muted">
            We'll never share your email.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handleSignUpState(e.target.value)}
          />
          <Form.Text className="text-muted">
            Please make it unique. We are "Media Claw" not the NSA.
          </Form.Text>
        </Form.Group>
        <div className="right-button">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UserSignup;

// OLD CODE
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const response = await axios.post('/user/login', {email, password});
//       console.log(response.data)
//     }
//     catch(err){
//       console.log(err);
//     }
//   }
