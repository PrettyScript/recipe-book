import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Button, Form, Container } from 'react-bootstrap';
import app from "./firebase";

import axios from 'axios';

//TODO: create a TIMEOUT so the name will show up immediately after signing up

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, firstName, lastName, username } = event.target.elements;
    console.log(firstName.value)
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
        let payload = { "email":email.value, "password":password.value, "firstName":firstName.value, "lastName":lastName.value, "username":username.value };
        axios.post('http://localhost:3000/addUser', payload)
        .then((data) => {console.log(data, 'did it!');})
        .catch((err) => {console.log(err) });
    } catch (error) {
      alert(error);
    }
  }, [history]);


//   const dummyFunc = (payload) => {
//       console.log("WORKING!!");
//       console.log(payload);
   
//   } 

  return (
    <Container>
        <Form onSubmit={handleSignUp}>
            <Form.Row>
                <Form.Group>
                    <Form.Control 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        id="firstName"
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