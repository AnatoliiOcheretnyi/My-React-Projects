import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import FriendBar from "./FriendBar/FriendBar";
import FriendName from "../Friends/FriendItem/FriendName/FriendName";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></div>
            <div><NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink></div>
            <div><NavLink to='/news' activeClassName={classes.active}>News</NavLink></div>
            <div><NavLink to='/music' activeClassName={classes.active}>Music</NavLink></div>
            <div><NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink></div>
            <div>
                <div><NavLink to='/friends' activeClassName={classes.active}>Friends</NavLink></div>
                <div> <FriendBar/> </div>
            </div>
        </nav>
    );
}

export default Navbar;