import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Outlet, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Qick Token</Navbar.Brand>
          <Container className="ms-auto">
            <Button variant="primary" onClick={handleClick}>
              Login
            </Button>
          </Container>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
