import {
    GET_POST_COMMENTS,
} from '../constants/ActionTypes'

export function getPostComments(comments) {
    return {
        type: GET_POST_COMMENTS,
        comments
    }
}