const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

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
        if(action.type === ADD_POST){
            let newPost ={
                id: 5,
                message: this._state.profilePage.newPostText,
                counter: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        }else if (action.type === UPDATE_TEXT_POST){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if (action.type === SEND_MESSAGE){
            let newMessage ={
                id: 3,
                message: this._state.dialogsPages.newMessage
            };
            this._state.dialogsPages.messages.push(newMessage);
            this._state.dialogsPages.newMessage = '';
            this._callSubscriber(this._state)
        }else if (action.type === UPDATE_TEXT_MESSAGE){
            this._state.dialogsPages.newMessage = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateTextPostActionCreator = (text) =>
    ({type: UPDATE_TEXT_POST, newText: text})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateTextMessageActionCreator = (text) =>
    ({type: UPDATE_TEXT_MESSAGE, newText: text})

export default store;
window.store = store;