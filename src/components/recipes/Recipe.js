import React, { Component } from 'react';
import { spoonacular } from '../../spoonacular';

export default class Recipe extends Component {
    constructor() {
        super()

        
    }

    // async componentDidMount() {
    //     const { recipeId } = this.props;
    //      //get recipe summary for the populated results
    //      let recipeSummary = `https://api.spoonacular.com/recipes/${recipeId}/summary?apiKey=${spoonacular.apiKey}`;
    //      const req = await fetch(recipeSummary);
    //      const res = await req.json();
    //      console.log(res);
    //      this.setState({
    //         recipeDescription: res.summary
    //      })
    // }
    

    render() {
        const { recipeImageUrl, recipeTitle } = this.props;
        // const { recipeDescription } = this.state;
        return (
            <div>
                <img src={recipeImageUrl} />
                <p>{recipeTitle}</p>
            </div>
        )
    }
}