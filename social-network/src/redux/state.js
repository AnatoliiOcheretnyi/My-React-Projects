let store = {
    _state: {
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
    },
    getState(){
        return this._state;
    },
    _callSubscriber() {

    },
    addPost() {
        let newPost ={
            id: 5,
            message: this._state.profilePage.newPostText,
            counter: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber()
    },
    updateTextPost(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },
    sendMessage() {
        let newwMessage ={
            id: 3,
            message: this._state.dialogsPages.newMessage
        };
        this._state.dialogsPages.messages.push(newwMessage);
        this._state.dialogsPages.newMessage = '';
        this._callSubscriber()
    },
    updateTextMessage(newText) {
        this._state.dialogsPages.newMessage = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;