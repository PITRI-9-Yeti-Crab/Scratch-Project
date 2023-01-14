import React from 'react';
import Header from './Header';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import ModalDemo from './ModalDemo';
import Modal_Login from './Modal_Login';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import './components.css'

function AboutTech() {
  return (
    <>

    <Header />

    <main>

    <h1>About the Technology!!</h1>

      <p>A page with Public Info about MEDIA CLAW</p>

    <img src="/assets/images/mediaclaw-f55c47.png" className="mc-logo-home" />


    </main>
    </>
  )
}

export default AboutTech;
