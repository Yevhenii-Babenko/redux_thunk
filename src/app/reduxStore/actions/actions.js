import axiosAPI from '../../axios/fetchApi';

export const loadTweets = () => (dispatch, getState) => {
    /* const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await responce.json(); */
    axiosAPI.getTweets()
        .then((response) => {
            dispatch ({
                type: 'load/tweets',
                payload: response.data });
        })
};

export const loadUsers = () => (dispatch, getState) => {
    axiosAPI.getUsers()
        .then((response) => {
            dispatch ({
                type: 'load/users',
                payload: response.data });
        })
};

export const postNewTweet = (userId, id, title, body) => (dispatch) => {
    axiosAPI.createTweet(userId, id, title, body).then((response) => {
        dispatch({
            type: 'add/new_tweet',
            payload: response
        });
    })

}