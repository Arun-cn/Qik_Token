import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Your Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">{/* Add your navigation links here */}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
