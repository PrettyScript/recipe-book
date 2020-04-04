import React, { Component } from 'react'
import app from '../firebase';

import axios from 'axios';



export default class HomePage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            firstName: ''
        }
    }

    //TODO: create a TIMEOUT so the name will show up immediately after signing up

    componentWillMount() {
        this.displayFirstName();
        console.log('it worked')
    }
    

    displayFirstName = () => {
        let email = app.auth().currentUser.email;
        let payload = { "email":email};
        axios.post('http://localhost:3000/getName', payload)
        .then((data) => {this.setState({firstName: data.data[0].first_name})})
        .catch((err) => {console.log(err) });
    }

    

    render() {

    
        return (
            <div>
                <h1>Hello <span id="username">{this.state.firstName}</span> </h1>
                <p id="summary"></p>
                <button
                    onClick={() => app.auth().signOut()}
                >Sign out</button>
            </div>
        );
    }
}

