import {
    RECEIVE_DATA,
    ADD_POST,
    UPDATE_POST_CONTENT,
    UPDATE_POST_VOTE
} from '../constants/ActionTypes'

export function receivePosts(posts) {
    return {
        type: RECEIVE_DATA,
        posts
    }
}

export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}


export function updatePostContent(updated_post) {
    return {
        type: UPDATE_POST_CONTENT,
        updated_post
    }
}


export function handleAddPost(new_post) {
    return dispatch => {
        return fetch("http://127.0.0.1:3001/posts", 
            {
                method: 'POST', 
                headers: { 'Authorization': 'mySecretToken', 'Content-Type': 'application/json' },
                body: JSON.stringify(new_post) 
            })
            .then(res => res.json())
            .then(post => dispatch(addPost(post)))
    }
}


export function handleUpdatePostContent(updated_post) {
    return dispatch => {
        return fetch(`http://127.0.0.1:3001/posts/${updated_post.id}`,
            {
                method: 'PUT', 
                headers: { 'Authorization': 'mySecretToken', 'Content-Type': 'application/json' },
                body: JSON.stringify(updated_post) 
            })
            .then(res => res.json())
            .then(updated_post => dispatch(updatePostContent(updated_post)))
    }
}

export function handleUpdatePostVote(updated_post, option){
    return dispatch => {
        return fetch(`http://127.0.0.1:3001/posts/${updated_post.id}`,
            {
                method: 'POST', 
                headers: { 'Authorization': 'mySecretToken', 'Content-Type': 'application/json' },
                body: JSON.stringify({option}) 
            })
            .then(res => res.json())
            .then(updated_post => dispatch(updatePostContent(updated_post)))
    }
}


export function handleFilterByCat(cat) {
    return dispatch => {
        return fetch(`http://127.0.0.1:3001/${cat}/posts`,
        {
            method: 'GET', 
            headers: { 'Authorization': 'mySecretToken', 'Content-Type': 'application/json' },
        })
        .then(res => res.json())
        .then(posts => dispatch(receivePosts(posts)))
    }
}
