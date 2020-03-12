import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Button, Form, Container, Row } from 'react-bootstrap';
// import Axios from 'axios';






export default class Router extends React.Component {
    // state = {
    //     firstName: '',
    //     lastName: '',
    //     username: '',
    //     email: '',
    //     password: ''
    // };

    // handleChange = event => {
    //     this.setState({name: event.target.value});
    // }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(this.state);

    //     const payload = {
    //         firstName: this.state.name,
    //         lastName: this.state.name,
    //         username: this.state.name,
    //         email: this.state.name,
    //         password: this.state.name
    //     }

    //     Axios.post('https://localhost:3000/createaccount', { payload })
    //         .then(res => {
    //        console.log(res);
    //        console.log(res.data)
    //    });
    // }

    
       
    

    render() {  
        return (
            <BrowserRouter>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/createaccount">Create Account</NavLink>
                    <NavLink to="/createrecipes">Create Recipes</NavLink>
                    <NavLink to="/resetpassword">Reset Password</NavLink>
                </div>

                <hr /> 

                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/createAccount">
                            <CreateAccount />
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
        );
    }
}


function Home() {
    return (
        <div>
            <h1>
                Welcome home!
            </h1>
        </div>
    );
}

function Login() {
    return (
        <Container>
            <Row>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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
function CreateAccount() {
    return (
        <Container>
            <Form>
                <Form.Row>
                    <Form.Group>
                        <Form.Control 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name" 
                            
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
                            
                            required 
                        />
                    </Form.Group>
                </Form.Row>
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}
function CreateRecipes() {
    return (
        <Container>
            <Form>
                <Form.Row>
                    <Form.Group>
                        <Form.Control type="text" placeholder="username" />
                    </Form.Group>
                 </Form.Row>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>Recipe Title:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>Ingredients</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group>
                        <Form.Label>instructions</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                </Form.Row>
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </Container>
    );
}
function ResetPassword() {
    return (
        <Container>
            <h3>Forgot Password/Username?</h3>
            <p>Enter the email address you used to register and we'll email you the password reset instructions.</p>
            <label type="text" label="Email">Email:</label>
            <input type="text" required />
            <button type="button">Send reset instructions</button>
        </Container>
    );
}