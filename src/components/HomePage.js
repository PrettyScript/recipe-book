import React from 'react';
import axios from 'axios';


export default class Home extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        // this.handleDisplayName = this.handleDisplayName.bind(this)
    }

    handleOnLoginSubmit(data) {
        this.props.handleLogin(data);
        console.log(data);
        // this.props.history.push('/')
    }

    

    render() {
    
    let username = 'test'
    let payload = {username: username}
    let text = ''


    axios.post('http://localhost:3000/homePage', payload)
    .then((data) => {
    let summary = document.getElementById('summary')
    console.log(data);

    for (let i = 0; i < data.data.length; i++) {
     text += (data.data[i].title + "<br>");
    }

    summary.innerHTML = `${text}`
    console.log(text)
  
    }).catch((err) => {console.log(err) });

    //get Users' first name
    axios.post('http://localhost:3000/getName', payload)
    .then((data) => {

    let firstName = data.data[0].first_name;
    
    this.props.handleDisplayName(firstName);
   
    console.log(firstName); 
    
    // let firstName = document.getElementById('username');
    // firstName.innerHTML = data.data[0].first_name;
  
    }).catch((err) => {console.log(err) });
        return (
            <div>
            <h1>Hello <span id="username">{this.props.username}</span> </h1>
             <p id="summary"></p>
            
        </div>
        );
    }
}