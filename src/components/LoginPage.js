import React, { useCallback, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form, Container, Row } from 'react-bootstrap';

import { withRouter, Redirect } from "react-router";
import app from "../firebase"
import { AuthContext } from "../Auth";
;


const Login = ({ history }) => {
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await app
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );
  
    const { currentUser } = useContext(AuthContext);
  
    if (currentUser) {
        console.log(currentUser);
        return <Redirect to="/" />;
    }

    return (
        <Container>
        <Row>
        <Form onSubmit={handleLogin}>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email"
                    name="email"
                 />
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button 
                variant="dark" 
                type="submit"
            >
                Submit
            </Button>
            <p id="errorMessage"></p>
            <NavLink to="/resetpassword">
                <Form.Text  
                    className="text-muted">
                    Forgot password/username?
                </Form.Text>
            </NavLink>
            <NavLink to="/signup">
                <Form.Text  
                    className="text-muted">
                    Don’t have an account? Sign Up!
                </Form.Text>
            </NavLink>
        </Form>
        </Row>
        </Container>
    );
} 

export default withRouter(Login);
