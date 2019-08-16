let renderEntireTree = () =>{

}

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
        ],
        newMessage: 'Hi!'
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

export const addPost = () =>{
    let newPost ={
        id: 5,
        message: state.profilePage.newPostText,
        counter: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree()
}
export const updateTextPost = (newText) =>{
    state.profilePage.newPostText = newText;
    renderEntireTree();
}
export const sendMessage = () =>{
    let newwMessage ={
        id: 3,
        message: state.dialogsPages.newMessage
    };
    state.dialogsPages.messages.push(newwMessage);
    state.dialogsPages.newMessage = '';
    renderEntireTree()
}
export const updateTextMessage = (newText) =>{
    state.dialogsPages.newMessage = newText;
    renderEntireTree();
}

export const subscribe = (observer) =>{
    renderEntireTree = observer;
}

export default state;