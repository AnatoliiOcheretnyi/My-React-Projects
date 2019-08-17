import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action)
        this._state.friendsPagesPage = friendsReducer(this._state.friendsPages, action)
        this._callSubscriber();
    }
}

export default store;
window.store = store;