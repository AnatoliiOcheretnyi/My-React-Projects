import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.messages.map(m => <MessageItem message={m.message}/>)

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