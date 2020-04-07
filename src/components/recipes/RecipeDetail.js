import React, { Component } from 'react';
import { spoonacular } from '../../spoonacular';

export default class RecipeDetail extends Component {
    //how will I get the ID??
    //when the results populate I want this api to run and return the summary for that recipe.
    async componentDidMount() {
        let requestUrl = `https://api.spoonacular.com/recipes/${recipe.id}/summary?apiKey=${spoonacular.apiKey}`;
        const request = await fetch(requestUrl);
        const response = await request.json();
        console.log(response);

    }
    

    render() {
        const { recipe } = this.props;
        console.log(recipe);

        return (
            <div>
            
            </div>
        )
    }
}
