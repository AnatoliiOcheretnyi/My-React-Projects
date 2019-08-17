import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPages: dialogsReducer,
    friendsPages: friendsReducer
});

let store = createStore(reducers);

export default store;