import React from 'react';
import Header from './Header';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import ModalDemo from './ModalDemo';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './components.css'

function Home() {
  return (
    <>

    <Header />

    <h1>HOME!!</h1>



    <UserLogin />

    <UserSignup />

    <ModalDemo />

    </>
  )
}

export default Home;
