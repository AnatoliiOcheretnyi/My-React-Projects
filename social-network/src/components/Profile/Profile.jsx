import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateTextPost} from "../../redux/state";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText ={props.profilePage.newPostText}
                     updatePostText={props.updatePostText}
                     addPost={props.addPost}/>
        </div>
    );
}

export default Profile;