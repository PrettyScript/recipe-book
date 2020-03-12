import React from 'react';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {
  render() {
    return (
      async function postData(url, data) {
        const response = await axios.post(url, data)
        return await response.json();
      }
    );
  }
}

//post data goes here
  



