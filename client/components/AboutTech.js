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

    <main id="about">

    <h1>About the Technology!!</h1>


    <img src="/assets/images/icon-toolbox.png" className="icon" />
    <h2>Tools Used</h2>

    <ul>
        <li>React Bootstrap</li>
        <li>Axios</li>
        <li>SQL</li>
        <li>OAuth</li>
        <li>Passport</li>
    </ul>

    <br /><br />

    <img src="/assets/images/icon-challenges-small.png" className="icon" />
    <h2>Technical Challenges</h2>
    <p className="lead">It's often the LITTLE THINGS!!</p>

    <ul>
        <li>PostgreSQL gets <code>angry</code> about camelCase—<i>USE UNDERSCORES!!</i></li>
        <li>Passport only serializes users, but <i>REFUSES to DE-serialize!!</i></li>
        <li><i>BAAAAAD DOOOOOCS!!</i></li>
        <li>Keeping track of props and state in a flurry of components. <i>SO MANY!!</i></li>
        <li>We were mostly good with GitHub, <i>UNTIL WE WEREN'T!!</i></li>
        <li>Scope!! We have no sharing or social features, and that is <i>OKAY!!</i></li>
    </ul>

    </main>
    </>
  )
}

export default AboutTech;
