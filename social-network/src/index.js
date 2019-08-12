import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'hi, how are you', counter: 21},
    {id: 2, message: 'it\'s my new post', counter: 35}
]

let dialogs = [
    {id: 1, name: 'Anatolii'},
    {id: 2, name: 'Anastasia'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'}
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
