import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateTextMessage, updateTextPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateTextPost={updateTextPost}
                 sendMessage={sendMessage}
                 updateTextMessage={updateTextMessage}/>
        </BrowserRouter>, document.getElementById('root'));
}

renderEntireTree(state);

subscribe(renderEntireTree)

serviceWorker.unregister();
