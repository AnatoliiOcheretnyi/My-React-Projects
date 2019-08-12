import React from 'react';
import classes from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${classes.dialog} + ${classes.activeDialog}`}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogsItem;