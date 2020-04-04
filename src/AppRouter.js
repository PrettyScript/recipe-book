import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import Home from './components/HomePage';
import Login from './components/LoginPage';


import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import SignUp from './SignUp';


//Provider is the glue for react and redux



export default class Router extends React.Component {
    constructor() {
        super();

        this.state = {
            username: 'test'
        }
      
        // this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    render() {
      
        return (
            <AuthProvider>
                <BrowserRouter>
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Sign Up</NavLink>
                        <NavLink to="/createrecipes">Create Recipes</NavLink>
                        <NavLink to="/resetpassword">Reset Password</NavLink>
                        <NavLink to={{
                                pathname:'/hometest',
                                state: {
                                    username: this.state.username
                                }
                            }}
                            >HomeTestPage
                        </NavLink>
                    </div>

                    <hr /> 

                    <div>
                        <Switch>
                            <PrivateRoute
                                exact 
                                path="/" 
                                component={Home}
                            />
                            <Route 
                                path="/login" 
                                component={Login}
                            />
                            <Route path="/signup">
                                <SignUp />
                            </Route>
                            <Route path="/createrecipes">
                                <CreateRecipes />
                            </Route>
                            <Route path="/resetpassword">
                                <ResetPassword />
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </AuthProvider>
        );
    }
}


function handleNewAccount(e) {
    e.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let payload = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
      };

    console.log(firstName, lastName, username, email, password);

    //somehow get the form button to send over data to connection.query
    //get the api to speak to the server
    

      axios.post('http://localhost:3000/addUser', payload)
        .then((data) => {
      console.log(data); // JSON data parsed by `response.json()` call
    }).catch((err) => {console.log(err)});
}



function handleCreatedRecipes(e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let ingredients = document.getElementById('ingredients').value;
    let instructions = document.getElementById('instructions').value;

    let payload = {
        username: username,
        title: title,
        description: description,
        ingredients: ingredients,
        instructions: instructions
    }

    console.log(username, title, description, ingredients, instructions);

    axios.post('http://localhost:3000/saveRecipe', payload)
        .then((data) => {
      console.log(data); // JSON data parsed by `response.json()` call
    }).catch((err) => {console.log(err)});
}

function CreateRecipes() {
    return (
        <Container>
            <Form onSubmit={handleCreatedRecipes}>
                <Form.Row>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            placeholder="username" 
                            id="username" 
                        />
                    </Form.Group>
                 </Form.Row>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>Recipe Title:</Form.Label>
                        <Form.Control 
                            type="text" 
                            id="title" 
                            required 
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows="3" 
                            id="description" 
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows="3" 
                            id="ingredients"
                        />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>instructions</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows="3" 
                            id="instructions"
                        />
                    </Form.Group>
                </Form.Row>
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}

function handleResetPassword() {
    let message = document.getElementById('resetMessage');
    let emailInput = document.getElementById('email').value;

    if(emailInput.length === 0) {
        message.innerHTML='please fill out the field.'
    } else {
        message.innerHTML='password email sent!'
    }

}

function ResetPassword() {
    return (
        <Container>
            <h3>Forgot Password/Username?</h3>
            <p id="resetMessage">Enter the email address you used to register and we'll email you the password reset instructions.</p>
            <label type="text" label="Email">Email:</label>
            <input type="text" id="email" required />
            <button type="button" onClick={handleResetPassword}>Send reset instructions</button>
        </Container>
    );
}