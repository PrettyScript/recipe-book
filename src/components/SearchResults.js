import React, { Component } from 'react';
import styled from 'styled-components';
import { spoonacular } from '../spoonacular';
import Recipe from './recipes/Recipe';

export default class SearchResults extends Component {
    constructor() {
        super()

        this.state = {
            recipes: []
        }
    }

    //TODO: User Stories 
    //-Fix the re-render of search bar 
    //- create an IF statement for unavailable images
    //how to show more than 10 items from results - Hugh 
    //- create an API callback that will populate receipe summary 


    async componentDidMount() {
        //get search results 
        let userInput = encodeURIComponent(this.props.location.searchValue);
        console.log(userInput);
        let requestUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonacular.apiKey}&query=${userInput}`;
        const request = await fetch(requestUrl);
        const response = await request.json();

        // for (let i = 0; i < response.results.length; i++) {
        //     someId 
        // }

        console.log(response.results[0].id);
        this.setState({
            recipes: response.results
        });         
    }

    render() {
        const { recipes } = this.state
        
        return (
            <div>
                <h1>Search Results</h1>
                {recipes.map(recipe => <Recipe 
                        recipeImageUrl={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} 
                        key={recipe.id} 
                        recipeTitle={recipe.title} 
                        recipeId={recipe.id}
                />)}
            </div>
        )
    }
}


const ResultsGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;

