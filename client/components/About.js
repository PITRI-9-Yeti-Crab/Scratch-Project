import React from 'react';
import Header from './Header';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import ModalDemo from './ModalDemo';
import Modal_Login from './Modal_Login';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import './components.css'

function About() {
  return (
    <>

    <Header />

    <main id="about">

    <h1>About Media Claw!!</h1>

    <img src="/assets/images/mediaclaw-f55c47.png" className="logo" />

    <h2>We are Team Yeti Crab!!</h2>
    <img src="/assets/images/ptri9-yeti-crab.jpg" className="center img-fluid" />

    <h3 className="next-link"><a href="/about-problem">Problem??</a></h3>
    </main>

    </>
  )
}

export default About;
