const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Anatolii'},
        {id: 2, name: 'Anastasia'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'}
    ],
    newMessage: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.newMessage
            };
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_TEXT_MESSAGE:
            state.newMessage = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateTextMessageActionCreator = (text) =>
    ({type: UPDATE_TEXT_MESSAGE, newText: text})

export default dialogsReducer;