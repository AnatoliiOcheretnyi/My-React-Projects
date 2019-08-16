import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import Settings from './components/Settings/Settings'
import News from './components/News/News'
import Music from './components/Music/Music'
import Friends from './components/Friends/Friends';
import {BrowserRouter, Route} from 'react-router-dom';
import {sendMessage, updateTextMessage, updateTextPost} from "./redux/state";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           state={props.state.dialogsPages}
                           dispatch={props.dispatch}/>}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends'
                       render={() => <Friends
                           state={props.state.friendsPages}/>}/>
            </div>
        </div>
    );
}

export default App;
