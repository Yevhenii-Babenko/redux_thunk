import { createStore, combineReducers } from 'redux'

const initialState = {
    user: [],
    tweets: [],
};

const addUserTweetReducer = (state=initialState, action) => {
    return state
} 

const reducer = combineReducers({
    addUserTweetReducer,
})

export const store = createStore(reducer);