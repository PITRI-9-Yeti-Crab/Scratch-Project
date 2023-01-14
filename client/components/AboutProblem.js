import React from 'react';
import Header from './Header';
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import ModalDemo from './ModalDemo';
import Modal_Login from './Modal_Login';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import './components.css'

function AboutProblem() {
  return (
    <>

    <Header />

    <main id="about">

    <h1>About the Problem!!</h1>

    <p className="megalead">The Problem is Media.</p>

    <p className="lead">How do you keep track of it all??</p>


    <h2>Solution!!</h2>

    <img src="/assets/images/icon-conveyor-claw.png" className="icon" />
    <p className="lead">GRAB the Media Info...</p>

    <img src="/assets/images/icon-conveyor-load.png" className="icon" />
    <p className="lead">...and PUT it in YOUR OWN LIST!!</p>

    <img src="/assets/images/icon-unit-stack.png" className="icon" />
    <h3 className="next-link">Demo!! then <a href="/about-tech">Tech!!</a></h3>

    </main>
    </>
  )
}

export default AboutProblem;
