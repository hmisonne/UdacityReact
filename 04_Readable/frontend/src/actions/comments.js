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

export function addComments(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export function handleAddComment(comment) {
    return dispatch => {
        return fetch(`http://127.0.0.1:3001/comments`, { headers: { 'Authorization': 'mySecretToken' } })
            .then(res => res.json())
            .then(new_comment => dispatch(addComments(new_comment)))
    }
}
// TODO Increment comment counter 

      // id: comment.id,
      // timestamp: comment.timestamp,
      // body: comment.body,
      // author: comment.author,
      // parentId: comment.parentId,
