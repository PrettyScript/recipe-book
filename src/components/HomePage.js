import React, { Component } from 'react'
import app from '../firebase';
import { spoonacular } from '../spoonacular'

import axios from 'axios';
import SavedRecipes from './recipes/SavedRecipes';



export default class HomePage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            randomTrivia: ''
        }
    }

    //TODO: create a TIMEOUT so the name will show up immediately after signing up
    // - Create a component that will display saved recipes on right side of the page

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

    // async componentDidMount() {
    //     let requestUrl = `https://api.spoonacular.com/food/joke/random?apiKey=${spoonacular.apiKey}`;
    //     const request = await fetch(requestUrl);
    //     const response = await request.json();
    //     console.log(response);
    //     this.setState({
    //         randomTrivia: response.text
    //     })
    // }

    render() {
        const { randomTrivia } = this.state;

        return (
            <div>
                <h1>Hello <span id="username">{this.state.firstName}!</span> </h1>
                <p>{randomTrivia}</p>
                <button
                    onClick={() => app.auth().signOut()}
                >Sign out</button>
                <SavedRecipes />
            </div>
        );
    }
}

