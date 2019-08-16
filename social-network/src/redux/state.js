import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi, how are you', counter: 21},
            {id: 2, message: 'it\'s my new post', counter: 35}
        ],
        newPostText: 'Anatolik zbs'
    },
    dialogsPages: {
        dialogs: [
            {id: 1, name: 'Anatolii'},
            {id: 2, name: 'Anastasia'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'}
        ]
    },
    friendsPages: {
        fullName: [
            {name: 'Anatolii', surname: 'Ochertnyi'},
            {name: 'Denis', surname: 'Harchuk'},
        ]
    },
    navBar: {
        bestFriends: [
            {name: 'first'},
            {name: 'second'},
            {name: 'third'}
        ]
    }
};

window.state = state

export let addPost = () =>{
    let newPost ={
        id: 5,
        message: state.profilePage.newPostText,
        counter: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state)
}
export let updateTextPost = (newText) =>{
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
export default state;