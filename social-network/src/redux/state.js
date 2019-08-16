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
    _callSubscriber() {

    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type === 'ADD-POST'){
            let newPost ={
                id: 5,
                message: this._state.profilePage.newPostText,
                counter: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        }else if (action.type === 'UPDATE-TEXT-POST'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if (action.type === 'SEND-MESSAGE'){
            let newMessage ={
                id: 3,
                message: this._state.dialogsPages.newMessage
            };
            this._state.dialogsPages.messages.push(newMessage);
            this._state.dialogsPages.newMessage = '';
            this._callSubscriber(this._state)
        }else if (action.type ==='UPDATE-TEXT-MESSAGE'){
            this._state.dialogsPages.newMessage = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;