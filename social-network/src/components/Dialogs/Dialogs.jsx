import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
    let dialogsElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElement = props.state.messages.map(m => <MessageItem message={m.message}/>)

    let newMessage = React.createRef();
    let sendMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'})
    };

    let changeMessage = () => {
        let text = newMessage.current.value
        let action = {type: 'UPDATE-TEXT-MESSAGE', newText: text};
        props.dispatch(action)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea ref={newMessage} onChange={changeMessage}
                          value={props.state.newMessage}/>
                <button onClick={sendMessage}>Send Message</button>
            </div>
        </div>
    );
}

export default Dialogs;