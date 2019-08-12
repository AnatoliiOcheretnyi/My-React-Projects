import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div><img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' /></div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;