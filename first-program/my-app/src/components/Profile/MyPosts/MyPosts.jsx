import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <div>
        <Post counter ='2' message='hi, how are you' />
        <Post counter = '3' message="it's my new post" />
      </div>
    </div>
  );
}

export default MyPosts;