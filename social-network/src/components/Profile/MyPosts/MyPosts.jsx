import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Posts/Post';
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElement =
        props.posts.map(p => <Post counter={p.counter} message={p.message} />)

    let newPost = React.createRef();
    let addPosts = () => {
        props.dispatch(addPostActionCreator())
    };
    let changePost = () => {
        let text = newPost.current.value
        props.dispatch(updateTextPostActionCreator(text))
    }
    return (
        <div className={classes.myPostsBlock}>
            <h2>My Posts</h2>
            <div>
                <div>
                    <textarea placeholder='what is your news?' ref={newPost} onChange={changePost}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button  onClick={addPosts}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;