import {
    RECEIVE_DATA,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST_CONTENT,
    UPDATE_POST_VOTE
} from '../constants/ActionTypes'

export default function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return state.concat(action.posts)
        case ADD_POST:
            return state.concat(action.post)
         case DELETE_POST:
            return state.filter(post => post.id !== action.post_id)
        default:
            return state
    }
}