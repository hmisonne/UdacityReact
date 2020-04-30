import {
    GET_POST_COMMENTS,
    DELETE_POST,
} from '../constants/ActionTypes'

export default function comments(state = [], action) {
    switch (action.type) {
        case GET_POST_COMMENTS:
            return action.comments
        default:
            return state
    }
}

        // case DELETE_POST:
        //     return state.filter(post => post.parentId !== action.post_id)