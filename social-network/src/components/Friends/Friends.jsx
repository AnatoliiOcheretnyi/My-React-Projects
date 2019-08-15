import React from 'react';
import classes from './Friends.module.css'
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

    return (
        <div>
            <FriendItem fullName={props.state.fullName}/>
        </div>
    );
}

export default Friends;