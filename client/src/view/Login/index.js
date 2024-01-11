import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from "react-redux"
import { login, logout } from '../../features/auth/auth.Slice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user, isAuthicatted} = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch()

  const HandleLogin = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password
    }

    dispatch(login(userData));
  };

  return (
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
  );
};

export default Login;