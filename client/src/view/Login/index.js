import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from "react-redux"
import { login, logout } from '../../features/auth/auth.Slice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {user, isAuthicatted} = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch()

  const HandleLogin = () => {
    const userData = {
      username,
      password
    }

    dispatch(login(userData));
    loguser()
    console.log(`user: ${user}`)
  };

  const loguser = async () =>{
    await console.log(user)
  }

  return (
    <div className="container mt-5">
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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