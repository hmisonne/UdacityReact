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


export function updatePostContent(post_id, post_content) {
    return {
        type: UPDATE_POST_CONTENT,
        post_id,
        post_content
    }
}

export function updatePostVote(post_id, vote) {
    return {
        type: UPDATE_POST_VOTE,
        post_id,
        vote
    }
}

export function handleAddPost(new_post) {
    return dispatch => {
        return fetch("http://127.0.0.1:3001/posts", 
            {
                method: 'POST', 
                headers: { 'Authorization': 'receive_posts', 'Content-Type': 'application/json' },
                body: JSON.stringify(new_post) 
            })
            .then(res => res.json())
            .then(post => dispatch(addPost(post)))
    }
}

