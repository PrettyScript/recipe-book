import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Button, Form, Container, Row, Alert } from 'react-bootstrap';


export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // username: username //can I use the value of the input of the username i.e. the target value 
        }

        this.handleDisplayName = this.handleDisplayName.bind(this);
    }

    handleDisplayName(data) {
        this.handleOnLoginSubmit(data);
        // this.props.history.push("/");
    }

    handleOnLoginSubmit (e) {

        e.preventDefault();
    
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
    
        let payload = {
            username: username,
            password: password
          };
    
       
    
          axios.post('http://localhost:3000/login', payload)
            .then((data) => {
    
            // let unsucessfulLogin = document.getElementById('forgotPassword');
            
            if(data.length === 0) {
               return ( 
                   <Alert variant="danger">
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                            <p>
                            Change this and that and try again. Duis mollis, est non commodo
                            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                            Cras mattis consectetur purus sit amet fermentum.
                            </p>
                    </Alert>)
                    
                // unsucessfulLogin.innerHTML=`We can't find that username and password. You can reset your password or try again.`
            } else {
                // this.props.handleDisplayName(data);
                window.open('/')
                // console.log('success')
            }
          console.log(data); // JSON data parsed by `response.json()` call
        }).catch((err) => {console.log(err)});
    
        console.log(username, password)
    }

    render() {
        return (
            <Container>
            <Row>
            <Form onSubmit={this.handleOnLoginSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" id="username" placeholder="Enter username" />
                </Form.Group>
            
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="dark" type="submit">Submit</Button>
                <NavLink to="/resetpassword">
                    <Form.Text  
                        className="text-muted">
                        Forgot password/username?
                    </Form.Text>
                </NavLink>
                <NavLink to="/createaccount">
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
}