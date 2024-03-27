import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import "@styles/header/_header.scss";

const Header = () => {
  return (
    <header className="shadow">
      <Navbar expand="md" className="py-3 custom-navbar" bg="transparent">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <span style={{ color: "#ff3b1d" }}>Story</span> Verse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto mt-4 mt-md-0">
              <Nav.Link to="/login" as={Link}>
                Login
              </Nav.Link>
              <Nav.Link to="/signup" as={Link}>
                Signup
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
