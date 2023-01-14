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
              <NavDropdown.Item href="#action/3.1">About the Project</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Technologies Used</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Major Challenges</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
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
