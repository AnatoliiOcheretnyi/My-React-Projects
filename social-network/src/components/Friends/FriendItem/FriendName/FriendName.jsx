import React from 'react';
import classes from './FriendName.module.css'

const FriendName = (props) => {

    return (
            <div>
                <img src="https://www.kp.ru/afisha/wp-content/uploads/2018/08/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80.jpg"
                     alt="avatar"/>
                <span>{props.name} {props.surname}</span>
            </div>
    );
}

export default FriendName;