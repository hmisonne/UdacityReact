import {
    GET_POST_COMMENTS,
} from '../constants/ActionTypes'

export default function comments(state = [], action) {
    switch (action.type) {
        case GET_POST_COMMENTS:
            return state.concat(action.comments)
        default:
            return state
    }
}