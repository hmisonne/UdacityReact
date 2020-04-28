import { receivePosts } from '../actions/posts'

export function handleInitialData() {
    return dispatch => {
        return fetch("http://127.0.0.1:3001/posts", { headers: { 'Authorization': 'receive_posts' } })
            .then(res => res.json())
            .then(posts => dispatch(receivePosts(posts)))
    }
}