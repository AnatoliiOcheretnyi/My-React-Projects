import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";






const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Anatolii'},
        {id: 2, name: 'Anastasia'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'}
    ]

    let dialogsElement = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
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