const initialState = {
    users: [],
    tweets: [],
};
const addUserTweetReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'C':
            return {
                ...state,
                users: action.payload
            };
        case 'add/posts':
            return {
                ...state,
                tweets: action.payload
            }
        default:
            return state;
    }
};
export default addUserTweetReducer;