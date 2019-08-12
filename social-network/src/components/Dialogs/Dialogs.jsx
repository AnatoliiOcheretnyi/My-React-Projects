import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1'>
                        Anatolii
                    </NavLink>
                </div>
                <div className={`${classes.dialog} + ${classes.activeDialog}`}>
                    <NavLink to='/dialogs/2'>
                        Anstasia
                    </NavLink>

                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>
                        Svitlana
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>
                        Bogdan
                    </NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you</div>
                <div className={classes.message}>it is great</div>
            </div>
        </div>
    );
}

export default Dialogs; 