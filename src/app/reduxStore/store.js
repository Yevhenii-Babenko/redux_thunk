import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import addUserTweetReducer from './redusers/root.reducer'

const reducers = combineReducers({
    addUserTweetReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;