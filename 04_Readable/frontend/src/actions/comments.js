import {
    GET_POST_COMMENTS,
    ADD_COMMENT
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

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function handleAddComment(new_comment) {
    return dispatch => {
        return fetch(`http://127.0.0.1:3001/comments`, 
            {
                method: 'POST', 
                headers: { 'Authorization': 'mySecretToken', 'Content-Type': 'application/json' },
                body: JSON.stringify(new_comment) 
            })
            .then(res => res.json())
            .then(comment => dispatch(addComment(comment)))
    }
}