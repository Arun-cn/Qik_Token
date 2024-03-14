import React, { useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../features/auth/auth.Slice";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout/Layout";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, isAuthicatted } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const HandleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  useEffect(() =>{
    if (isAuthicatted) {
      navigate("/"); // Redirect to the home page if authenticated
    }

  },[isAuthicatted, navigate]);



  return (
    <Layout>
      <div className="container mt-5">
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={HandleLogin}>
            Login
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default Login;
