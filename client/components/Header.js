import React from 'react';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {


  return (
    <>

<Navbar bg="dark" variant="dark" expand="lg">
      <Container>


        <Navbar.Brand href="/">
          <img src="/assets/images/mediaclaw-36x48.png" />
          Media Claw!!
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="about">About Media Claw</NavDropdown.Item>
              <NavDropdown.Item href="about-problem">What's the Problem?</NavDropdown.Item>
              <NavDropdown.Item href="about-tech">Technologies & Challenges</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="dash" className="text-muted small">
                Secret Link, Don't Look
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
    );
};

export default Header;
