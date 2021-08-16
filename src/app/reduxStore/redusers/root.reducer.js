import { tweets } from "../selectors/selectors";

const initialState = {
    users: [],
    tweets: [],
};
const addUserTweetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'load/users':
            return {
                ...state,
                users: action.payload
            };
        case 'add/new_user': 
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case 'load/tweets':
            return {
                ...state,
                tweets: action.payload
            }
        case 'add/new_tweet':
            return {
                ...state,
                tweets: [...tweets, action.payload]  
            }
        default:
            return state;
    }
};
export default addUserTweetReducer;