const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                counter: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_TEXT_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateTextPostActionCreator = (text) =>
    ({type: UPDATE_TEXT_POST, newText: text})

export default profileReducer;