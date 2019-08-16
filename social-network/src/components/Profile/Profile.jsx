import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText ={props.profilePage.newPostText}
                     updateTextPost={props.updateTextPost}
                     addPost={props.addPost}/>
        </div>
    );
}

export default Profile;