import React from "react";
import { Navbar, Nav ,Container, Button, Form, NavDropdown, Offcanvas} from "react-bootstrap";
import "./navbar.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/auth.Slice"

const Navigation = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

const handleLogout = (e) =>{
   e.preventDefault();
   dispatch(logout());
   navigate("/login");
   
}

  return (
    <Navbar expand="md" className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar`}
              aria-labelledby={`offcanvasNavbarLabel`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                  <Nav.Link href="/tokens">Tokens</Nav.Link>
                  <Button variant="danger " onClick={handleLogout}>Logout</Button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
     );
};

export default Navigation;
