import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;

//Store: the global state 
//Action: describes what you want to do
        //type:INCREMENT <- type is what most people use but it's simply just the 'name' of the
//Reducer: describes how your actions transform your state to the next step. So it will check the action that you did and then modify the store(global state)
//Dispatch: the way to execute everything