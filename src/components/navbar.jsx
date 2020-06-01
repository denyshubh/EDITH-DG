import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
const NavBar = ({ user }) => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/"><i><b>=EDITH</b></i></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/cars">Cars</Nav.Link>
      <Nav.Link href="/liked">My Collections</Nav.Link>
          {!user && (
            <React.Fragment>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </React.Fragment>
          )}
          {user && (
          <React.Fragment>
              <Nav.Link href="/profile">{user.name}</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </React.Fragment>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default NavBar;
