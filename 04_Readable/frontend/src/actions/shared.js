import { receivePosts } from './posts'
import {
    DELETE_POST,
    DELETE_COMMENT,
} from '../constants/ActionTypes'


export function handleInitialData() {
    return dispatch => {
        return fetch("http://127.0.0.1:3001/posts", { headers: { 'Authorization': 'receive_posts' } })
            .then(res => res.json())
            .then(posts => dispatch(receivePosts(posts)))
    }
}


export function handleDeletePost(post_id) {
    return dispatch => {
        return fetch(`http://127.0.0.1:3001/posts/${post_id}`, 
            {
                method: 'DELETE', 
                headers: { 'Authorization': 'mySecretToken', 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(post => {
            	dispatch(deletePost(post.id))
            })
    }
}

export function deletePost(post_id) {
    return {
        type: DELETE_POST,
        post_id
    }
}

export function handleDeleteComment(comment_id) {
    return dispatch => {
        return fetch(`http://127.0.0.1:3001/comments/${comment_id}`, 
            {
                method: 'DELETE', 
                headers: { 'Authorization': 'mySecretToken', 'Content-Type': 'application/json' },
            })
            .then(res => res.json())
            .then(comment => {
                dispatch(deleteComment(comment.id))
            })
    }
}

export function deleteComment(comment_id) {
    return {
        type: DELETE_COMMENT,
        comment_id
    }
}
