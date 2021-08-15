/* import { applyMiddleware } from '@reduxjs/toolkit'; */
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import addUserTweetReducer from './redusers/root.reducer'

const logger = store => next => action => {
    console.log('dispatching', action)
}
const reducer = combineReducers({
    addUserTweetReducer,
})

export const store = createStore(reducer, applyMiddleware(logger));