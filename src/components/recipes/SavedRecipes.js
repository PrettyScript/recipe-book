import React, { Component } from 'react';
import axios from 'axios';
import app from '../../firebase';

export default class SavedRecipes extends Component {
    constructor() {
        super()

        this.state = {
            titles: []
        }
    }
    componentDidMount() {
        this.getRecipes();
    }
    

    getRecipes = () => {
        let email = app.auth().currentUser.email;
        axios.post('http://localhost:3000/getRecipes', {'email':email})
        .then((data) => {
            console.log(data.data)
            data.data.map((item) => {this.setState({
                titles: this.state.titles.concat(item.title)
            })});
            // console.log(this.state.titles, 'here!')
        })
        .catch((error) =>{console.log(error)});
    }

    render() {
        const { titles } = this.state;
        return (
            <div>
                <h1>Saved Recipes</h1>
                {titles.map((item) => <p key={item}>{item}</p>)}
            </div>
        )
    }
}

// let item = data.data;
//             let items = ''
//             for (let i = 0; i < item.length; i++) {
//                 items += item[i].title;
//             }
//             this.setState({
//                 titles: items
//             });
