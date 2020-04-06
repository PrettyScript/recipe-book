import React, { Component } from 'react';
import styled from 'styled-components';
import { spoonacular } from '../spoonacular';

export default class SearchResults extends Component {
    constructor() {
        super()

        this.state = {
            recipes: []
        }
    }

    async componentDidMount() {
        let userInput = encodeURIComponent(this.props.location.searchValue);
        console.log(userInput);
        let requestUrl = `https://api.spoonacular.com/recipes/search?apiKey=${spoonacular.apiKey}&query=${userInput}`;
        const request = await fetch(requestUrl);
        const response = await request.json();
        console.log(response.results);
        this.setState({
            recipes: response.results
        });
    }

    
    


    render() {
        const { recipes } = this.state
        // const recipeImg = `https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`;
    
        return (
            <div>
                <h1>Search Results</h1>
                {recipes.map(recipe => <img src={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} key={recipe.id} alt={recipe.title}></img>)}
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

