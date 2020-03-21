import { FETCH_POSTS, NEW_POST } from './types';


export const fetchPosts = () => dispatch => {
    console.log('fetching');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    );
};

export const createPost = postData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: NEW_POST,
          payload: post
        })
      );
  };


//each action/action creator will have to be a function that we need to export

// export function fetchPosts() {
//     //The thunk middleware allows us to call the dispatch function directly so that we can make async requests
//     return function(dispatch) {
//         //you can think of dispatch as a resolver in a promise
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => dispatch({
//                 type: FETCH_POSTS,
//                 payload: posts
//             }));
//     }
// }
