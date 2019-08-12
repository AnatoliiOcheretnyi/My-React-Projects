import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${classes.dialog} + ${classes.activeDialog}`}>
            <NavLink to={path}>
                {props.name}
            </NavLink>

        </div>
    );
}

const MessageItem = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Anatolii'},
        {id: 2, name: 'Anastasia'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'}
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElement = messages.map(m => <MessageItem message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    );
}

export default Dialogs; 