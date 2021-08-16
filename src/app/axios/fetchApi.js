import axios from 'axios'

const base_url = 'https://jsonplaceholder.typicode.com';
const baseConnection = axios.create({
    baseURL: base_url
});

const axiosAPI = ({
    getUsers: () => baseConnection.get('/users'),
    createUser: (
        id,
        name,
        username,
        email
        ) => baseConnection.post('/users', {
            id,
            name,
            username,
            email 
        }),
    getTweets: () => baseConnection.get('/posts'),
    createTweet: (
        userId,
        id,
        title,
        body
        ) => baseConnection.post('/posts', {
            userId,
            id,
            title,
            body
        })
})

export default axiosAPI;