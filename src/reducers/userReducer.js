import { FETCH_USER, CURRENT_USER } from '../actions/types';

const initialState = {
    username: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        // handle a particular action type
        case FETCH_USER:
            // return the new state
            return {
                ...state,
                username: action.payload
            };
        case CURRENT_USER:
            return {
                ...state,
                username: action.payload
            };
        default:
            //always return state
            return state;
    }
}