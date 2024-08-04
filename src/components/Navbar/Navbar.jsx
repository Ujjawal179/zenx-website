import React from 'react'


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import styles from './Navbar.module.css';

function NavbarOffcanvas() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">
              <img className={styles.logo} src='/logo.png' alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img className={styles.logo} src='/logo.png' alt="Logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav style={{"font-size": 'larger', 'font-weight': 'bolder'}} className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="gym">GYM</Nav.Link>
                  <Nav.Link href="trainers">Trainers</Nav.Link>
                  <Nav.Link href="/">About</Nav.Link>
                  <Nav.Link href="login">LogIn</Nav.Link>
                  <Nav.Link href="signup">SignUp</Nav.Link>
                  <Nav.Link href="User">User</Nav.Link>
                  <Nav.Link href="TrainerAdmin">TrainerAdmin</Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarOffcanvas;