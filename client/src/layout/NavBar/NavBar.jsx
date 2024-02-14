import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { logout } from '../../features/auth/auth.Slice';


function NavBar() {
  const dispatch = useDispatch();
  const {user, isAuthicatted} = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const HandleLogout = () => {
    dispatch(logout());

    navigate("/login");
  };

  const HandleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Qick Token</Navbar.Brand>
          <Container className="ms-auto">
          {isAuthicatted ? (
        <Button variant="primary" onClick={HandleLogin}>
          Login
        </Button> ):
       ( <Button variant="primary" onClick={HandleLogout}>
          Logout
        </Button>)}
          </Container>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
