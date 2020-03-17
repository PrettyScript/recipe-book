import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import { Button, Form, Container, Row, Alert } from 'react-bootstrap';
import axios from 'axios';

//might look into redux because it can pass in the username date and update the state there.


export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: 'Jess'
        }
    }

    // onUsernameChange = (username) => {
    //     console.log('changing username')
    //     this.setState({username: username});
    // }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleOnLoginSubmit = (e) => {
        e.preventDefault();
    
    
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
    
        this.setState({username: username}, () => {this.fetchSavedRecipes();})
        
    
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
                // fetchData(username); 
                window.open('/')
                // console.log('success')
            }
          console.log(data); // JSON data parsed by `response.json()` call
        }).catch((err) => {console.log(err)});
    
        console.log(username, password)
    }

    fetchSavedRecipes = () => {
        // e.preventDefault();

        let username = this.state.username;
        console.log('this is the username!!' + username)
        let payload = {
            username: username
        }
        let text = ''
        

        axios.post('http://localhost:3000/homePage', payload)
        .then((data) => {
        this.setState({data: data.data});
        let summary = document.getElementById('summary')
        console.log(data);

        for (let i = 0; i < data.data.length; i++) {
        text += (data.data[i].title + "<br>");
        }

        

        summary.innerHTML = `${text}`
        console.log(text)
    
        }).catch((err) => {console.log(err) });

        //get Users' first name
        axios.post('http://localhost:3000/getName', payload)
        .then((data) => {
        this.setState({first_name:data.data[0].first_name,})
        console.log(data); 
        

        //doesn't work
        let firstName = document.getElementById('username');
        firstName.innerHTML = data.data[0].first_name;
    
        }).catch((err) => {console.log(err) });

    }

    getSavedRecipes = () => {
        return {data: this.state.data, first_name: this.state.first_name}
    }

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
                            <Home getSavedRecipes={this.getSavedRecipes} />
                        </Route>
                        <Route 
                            path="/login"
                            render={props => (
                                <Home {... props} username={this.state.username} />
                            )}
                        >
                            <Login handleOnLoginSubmit={this.handleOnLoginSubmit}/>
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

const FetchSavedRecipes = (props) => {
    
    let info = props.getSavedRecipes();
    console.log("info on FetchSavedRecipes: ",info.first_name, info.recipes)
    return (<div>
            <p>`Saved Recipes: ${info.data}`</p>
            <p>`first name: {info.first_name}`</p>
            </div>);
    
}

//get username from the login to pass to homepage
function Home(props) {
    
    return (
        <div>
            <h1>Hello <span id="username"></span> </h1>
             <p id="summary"></p>
            <FetchSavedRecipes getSavedRecipes={props.getSavedRecipes} />
        </div>
    );
}



const Login = (props) => {

    return (
        <Container>
            <Row>
            <Form onSubmit={props.handleOnLoginSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        name="username"
                        id="username" 
                        onChange={e => this.onChange(e)}
                        placeholder="Enter username"
                        value={this.state.username} 
                    />
                </Form.Group>
            
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password"
                        id="password" 
                        placeholder="Password" 
                        onChange={e => this.onChange(e)}
                        value={this.state.password}
                    />
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