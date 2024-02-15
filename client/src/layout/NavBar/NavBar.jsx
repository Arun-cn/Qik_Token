import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate, useNavigation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../features/auth/auth.Slice";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthicatted } = useSelector((state) => state.auth);
  const HandleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  const HandleLogin = () => {};
  // if (!isAuthicatted) {
  //   navigate("/login");
  // }

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Qick Token</Navbar.Brand>
          <Container className="ms-auto">
            <div>
            {isAuthicatted ? (
              <Button variant="primary" onClick={HandleLogin}>
                Login
              </Button>
            ) : (
              <Button variant="primary" onClick={HandleLogout}>
                Logout
              </Button>
            )}
            </div>
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
