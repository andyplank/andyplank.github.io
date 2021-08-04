import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Header.css';

function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="navBar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link active={false} href="#about">About</Nav.Link>
            <Nav.Link active={false} href="#experience">Experience</Nav.Link>
            <Nav.Link active={false} href="#projects">Projects</Nav.Link>
            <Nav.Link active={false} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
