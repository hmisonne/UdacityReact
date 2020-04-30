import {
    GET_POST_COMMENTS,
} from '../constants/ActionTypes'

export function getPostComments(comments) {
    return {
        type: GET_POST_COMMENTS,
        comments
    }
}


export function handleGetPostComments(id) {
    return dispatch => {
        return fetch(`http://127.0.0.1:3001/posts/${id}/comments`, { headers: { 'Authorization': 'mySecretToken' } })
            .then(res => res.json())
            .then(comments => {
                return dispatch(getPostComments(comments))})
    }
}
