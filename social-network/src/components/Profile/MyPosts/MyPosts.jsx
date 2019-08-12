import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'hi, how are you', counter: 21},
        {id: 2, message: 'it\'s my new post', counter: 35}
    ]

    let postsElement = posts.map(p => <Post counter={p.counter} message={p.message} />)

    return (
        <div className={classes.myPostsBlock}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;