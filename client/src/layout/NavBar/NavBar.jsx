import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Qick Token</Navbar.Brand>
          <Container className="ms-auto">
            <Button variant="primary">Login</Button>
            <Button variant="primary">Register</Button>
          </Container>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
