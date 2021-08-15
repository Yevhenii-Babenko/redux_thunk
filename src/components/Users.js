import React, { useState, useEffect } from 'react';

export default function Users() {
  const [posts, setPosts] = useState({
    data: [],
  });
  useEffect(() => {
    const fetchPosts = async () => {
      fetch('https://gorest.co.in/public/v1/posts')
        .then(data => data.json())
        .then(json => {
          console.log('data in json',json)
          return setPosts(json)
        })
    }
    fetchPosts();
  }, [])
  console.log('data after setPosts',posts)
  return ( 
    <div className="users-container">
      <h1>Users</h1>
      { posts.data.map((post, index) => (
         <div className="post-container" key={index}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>)
          )
      }
    </div>
  );
}
