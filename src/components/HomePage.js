import React, { Component } from 'react'
import { currentUser } from '../actions/userActions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import app from 'firebase';



export default class HomePage extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);

        // this.onSubmit = this.onSubmit.bind(this)
    }

    

    render() {

        // let user = firebase.auth().currentUser;

        // if (user != null) {
        //   user.providerData.forEach(function (profile) {
        //     console.log("Sign-in provider: " + profile.providerId);
        //     console.log("  Provider-specific UID: " + profile.uid);
        //     console.log("  Name: " + profile.displayName);
        //     console.log("  Email: " + profile.email);
        //     console.log("  Photo URL: " + profile.photoURL);
        //   });
        // }
    // console.log(this.props.user, 'user');
    // console.log(this.props.history, 'history')
    // let username = 'test'
    // let payload = {username: username}
    // let text = ''


    // axios.post('http://localhost:3000/homePage', payload)
    // .then((data) => {
    // let summary = document.getElementById('summary')
    // console.log(data);

    // for (let i = 0; i < data.data.length; i++) {
    //  text += (data.data[i].title + "<br>");
    // }

    // summary.innerHTML = `${text}`
    // console.log(text)
  
    // }).catch((err) => {console.log(err) });

    // //get Users' first name
    // axios.post('http://localhost:3000/getName', payload)
    // .then((data) => {

    // let firstName = data.data[0].first_name;
    
    // this.props.handleDisplayName(firstName);
   
    // console.log(firstName); 
    
    // // let firstName = document.getElementById('username');
    // // firstName.innerHTML = data.data[0].first_name;
  
    // }).catch((err) => {console.log(err) });
    //     return (
    //         <div>
    //         <h1>Hello <span id="username">{this.props.username}</span> </h1>
    //          <p id="summary"></p>
            
    //     </div>
    //     );
        return (
            <div>
                <h1>Hello <span id="username"></span> </h1>
                <p id="summary"></p>
                <button
                    onClick={() => app.auth().signOut()}
                >Sign out</button>
            </div>
        );
    }
}




// const mapStateToProps = state => ({
//     user: state.user.username
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
//     currentUser,
//   }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);