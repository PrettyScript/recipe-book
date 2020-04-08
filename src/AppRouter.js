import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/HomePage';
import Login from './components/LoginPage';


import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import SignUp from './SignUp';
import CreateRecipes from './components/recipes/CreateRecipes';

import { Layout } from './components/Layout';
import NavigationBar  from './components/NavigationBar';
import SearchResults from './components/SearchResults';




export default class Router extends React.Component {
    render() {
        return (
            <AuthProvider>
                <BrowserRouter>
                <NavigationBar />
                    <Layout>
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
                            <Route 
                                path="/createrecipes"
                                component={CreateRecipes}
                            >
                                <CreateRecipes />
                            </Route>
                            <Route path="/resetpassword">
                                <ResetPassword />
                            </Route>
                            <Route
                                path="/searchresults"
                                component={SearchResults}
                            />
                        </Switch>
                    </div>
                    </Layout>
                </BrowserRouter>
            </AuthProvider>
        );
    }
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