import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUser, currentUser } from '../actions/userActions';
import { connect } from 'react-redux';
import { Button, Form, Container, Row } from 'react-bootstrap';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: username //can I use the value of the input of the username i.e. the target value 
            username: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.fetchUser(this.state.username, this.state.password)
        .then((data) => {
            if(!data) {
                console.log('nay');
                document.getElementById('errorMessage').innerHTML = 'try again'
            } else {
                console.log('yay');
                this.props.history.push("/");
            }
        })
        .catch((err) => {
            console.log(err, 'error')
        });

    }

    //                <Alert variant="danger">
    //                     <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    //                         <p>
    //                         Change this and that and try again. Duis mollis, est non commodo
    //                         luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
    //                         Cras mattis consectetur purus sit amet fermentum.
    //                         </p>
    //                 </Alert>)
                  
   

    render() {
        return (
            <Container>
            <Row>
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                     />
                </Form.Group>
                
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        id="password" 
                        placeholder="Password" 
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="dark" type="submit">Submit</Button>
                <p id="errorMessage"></p>
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

Login.propTypes = {
    fetchUser: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.user.username
});

export default connect(mapStateToProps, { fetchUser, currentUser })(Login);