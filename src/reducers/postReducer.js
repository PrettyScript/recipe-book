//evaluate any actions that are commited, actions such as fetching our post and creating our post.

//for our actions, we create types and they are constant

import { FETCH_POSTS, NEW_POST } from '../actions/exampleTypes';

const initialState = {
    items: [],
    item: {}
  };

//evaluates what type that we are dealing with
export default function(state = initialState, action) {
    switch (action.type) {
      case FETCH_POSTS:
        return {
          ...state,
          items: action.payload
        };
      case NEW_POST:
        return {
          ...state,
          item: action.payload
        };
      default:
        return state;
    }
  }