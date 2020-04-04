import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Button, Form, Container } from 'react-bootstrap';
import app from "./firebase";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
          history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);


  return (
    <Container>
        <Form onSubmit={handleSignUp}>
            <Form.Row>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        id="name"
                        required 
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        name="lastName"
                        placeholder="Last Name" 
                        id="lastName"
                        required 
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        name="username"
                        placeholder="Username" 
                        id="username"
                        required 
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group>
                    <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        id="email"
                        required 
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group>
                    <Form.Control 
                        type="password" 
                        name="password"
                        placeholder="Password" 
                        id="password"
                        required 
                    />
                </Form.Group>
            </Form.Row>
            <Button variant="dark" type="submit">Sign Up!</Button>
        </Form>
    </Container>
);
};

export default withRouter(SignUp);