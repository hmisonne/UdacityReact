import {
    RECEIVE_DATA,
    ADD_POST,
    DELETE_POST,
    UPDATE_POST_CONTENT,
    UPDATE_POST_VOTE
} from '../actions'

export default function posts(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return state.concat(action.posts)
        case ADD_POST:
            return {
                ...state,
                ...action.post
            }
        default:
            return state
    }
}