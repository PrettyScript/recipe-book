import { FETCH_USER, CURRENT_USER } from './types';
import axios from 'axios';

export const fetchUser = (username, password ) => dispatch => {
    return axios.post('http://localhost:3000/login', {username, password})
        .then((data) => {
            let firstName = data.data[0];
            console.log(firstName)
            dispatch(successfulLogin(data)) 
            return firstName;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
}

const successfulLogin = (data) => {
    return {
        type: FETCH_USER,
        data: data
    }
    
}

export const currentUser = (username) => dispatch => {
    console.log('show first name');
    
    axios.post('http://localhost:3000/getName', {username})
    .then((data) => {
        console.log(data); 
        dispatch(displayFirstName(data))
    })
    .catch((err) => {
        console.log(err) });

}

const displayFirstName = (data) => {
    return {
        type: CURRENT_USER,
        payload: data
    }
}


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




 