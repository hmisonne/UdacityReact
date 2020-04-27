import {
    RECEIVE_DATA,
    ADD_POST,
    DELETE_POST,
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

export function deletePost(post_id) {
    return {
        type: DELETE_POST,
        post_id
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
