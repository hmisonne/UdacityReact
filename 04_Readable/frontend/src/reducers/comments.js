import {
    GET_POST_COMMENTS,
    DELETE_COMMENT,
} from '../constants/ActionTypes'

export default function comments(state = [], action) {
    switch (action.type) {
        case GET_POST_COMMENTS:
            return action.comments
        case DELETE_COMMENT:
            return state.filter(comment => comment.id !== action.comment_id)
        default:
            return state
    }
}

        // case DELETE_POST:
        //     return state.filter(post => post.parentId !== action.post_id)