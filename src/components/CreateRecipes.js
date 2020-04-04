import React, { Component } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';

import app from '../firebase';



export default class CreateRecipes extends Component {
    constructor(props){
        super(props) 

        // app.initializeApp(app.firebase);
        // this.db = this.app.database().ref().child('createrecipes')

        this.state = {
            username: '',
            title: '',
            description: '',
            ingredients: '',
            instructions: ''
        }

    } 

        // writeUserData = () => {
        //     app.database().ref('/createrecipes').set(this.state);
        //     console.log('DATA SAVED');
        // }
      
    //   getUserData = () => {
    //     let ref = Firebase.database().ref('/');
    //     ref.on('value', snapshot => {
    //       const state = snapshot.val();
    //       this.setState(state);
    //     });
    //     console.log('DATA RETRIEVED');
    //   }

    // componentWillMount() {
    //     const 
    // }
    

    handleCreatedRecipes(e) {
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

    render() {
        return (
            <Container>
                <Form>
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
}
