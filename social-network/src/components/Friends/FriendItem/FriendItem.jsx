import React from 'react';
import classes from './FriendItem.module.css'
import Post from "../../Profile/MyPosts/Posts/Post";
import FriendName from "./FriendName/FriendName";

const FriendItem = (props) => {
    let friendElement = props.fullName.map(f => <FriendName name={f.name} surname={f.surname} />)
    return (
            <div className={classes.item}>
                {friendElement}
            </div>
    );
}

export default FriendItem;