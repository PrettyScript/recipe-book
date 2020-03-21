import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Button, Form, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import Test from './components/testPage';
import Home from './components/HomePage';
import Login from './components/LoginPage';
import Test2 from './components/test2Page';
import { UserContext } from './UserContext';
import Posts from './components/Posts';

import { Provider } from 'react-redux';
import store from './store';


//Provider is the glue for react and redux



export default class Router extends React.Component {
    constructor() {
        super();

        this.state = {
            username: 'it works!'
        }
      
    }


    // another way to use UserContext but component not accepting it so it's best to just pass the value inline 
    // const [value, setValue] = useState('hello from context');
    

    render() {
        
      
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/createaccount">Create Account</NavLink>
                        <NavLink to="/createrecipes">Create Recipes</NavLink>
                        <NavLink to="/resetpassword">Reset Password</NavLink>
                        <NavLink to="/test">Test Page</NavLink>
                        <NavLink to="/test2">Test 2 Page</NavLink>
                        <NavLink to="/posts">Redux Example Posts</NavLink>
                    </div>

                    <hr /> 

                    <div>
                        <Switch>
                            <Route 
                                exact 
                                path="/" 
                                render={props => (
                                    <Home {... props} handleLogin={this.handleLogin} 
                                    />
                                )}
                            />
                            <Route 
                                path="/login" 
                                component={Login}
                                handleOnLoginSubmit={this.handleOnLoginSubmit}
                            />
                            <Route path="/createAccount">
                                <CreateAccount />
                            </Route>
                            <Route path="/createrecipes">
                                <CreateRecipes />
                            </Route>
                            <Route path="/resetpassword">
                                <ResetPassword />
                            </Route>
                            <Route 
                                path="/posts"
                                component={Posts}
                            />
                            <UserContext.Provider value='hello from context'>
                                <Route 
                                    path="/test"
                                    render={props => (
                                        <Test {... props} username={this.state.username} />
                                    )}
                                /> 
                                <Route 
                                        path="/test2"
                                        component={Test2}
                                />
                            </UserContext.Provider>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
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

function CreateAccount() {
    return (
        <Container>
            <Form onSubmit={handleNewAccount}>
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
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </Container>
    );
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