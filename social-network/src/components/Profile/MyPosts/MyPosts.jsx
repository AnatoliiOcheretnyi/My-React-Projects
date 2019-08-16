import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post counter={p.counter} message={p.message} />)

    let newPost = React.createRef();
    let addPost = () => {
        let post = newPost.current.value;
        props.addPost(post)
        newPost.current.value = '';
    };
    return (
        <div className={classes.myPostsBlock}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea ref={newPost}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;