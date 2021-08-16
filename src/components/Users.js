import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTweets, loadUsers } from '../app/reduxStore/actions/actions'
import { tweets, users } from '../app/reduxStore/selectors/selectors';



export default function Users() {
  const posts = useSelector(tweets);
  const getUsers = useSelector(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTweets())
    dispatch(loadUsers())

  }, [dispatch])
  return ( 
    <div className="users-container">
      <h1>Users</h1>
      {console.log('this is posts', posts, getUsers)}
      {posts.map((post)=>post.title)}
      {getUsers.map((user) => <p>{user.id}</p>)}
    </div>
  );
}
