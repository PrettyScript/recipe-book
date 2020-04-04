import { FETCH_USER, CURRENT_USER } from '../actions/types';

const initialState = {
    username: ''
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        // handle a particular action type
        case FETCH_USER:
            // return the new state
            return {
                ...state,
                username: payload
            };
        case CURRENT_USER:
            return {
                username: 'Jessica' 
            };
        default:
            //always return state
            return state;
    }
}