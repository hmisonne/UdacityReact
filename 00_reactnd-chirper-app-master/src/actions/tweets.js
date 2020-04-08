import { saveLikeToggle, saveTweet, removeTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'
export const DELETE_TWEET = 'DELETE_TWEET'

export function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS,
		tweets
	}
}

export function toggleTweets({id, authedUser, hasLiked}) {
	return {
		type: TOGGLE_TWEET,
		id, 
		authedUser,
		hasLiked
	}
}

export function handleToggleTweets(info){
	return (dispatch) => {
		dispatch(toggleTweets(info))
		return saveLikeToggle(info)
			.catch((e) => {
				console.warn('Error in handleToggleTweets: ',e)
				dispatch(toggleTweets(info))
				alert('There was an error liking the tweet. Try again')
			})
	}

}

export function addTweet(tweet) {
	return {
		type: ADD_TWEET,
		tweet,
	}
}

export function handleDeleteTweet(tweet) {
	return (dispatch) => {
		dispatch(deleteTweet(tweet))
		return removeTweet(tweet)
			.catch(e => {
				console.warn('Error in handleDeleteTweet: ',e)
				dispatch(addTweet(tweet.text, tweet.replyingTo))
				alert('There was an error deleting the tweet. Try again')
			})
	}
}

export function deleteTweet(tweet) {
	return {
		type: DELETE_TWEET,
		tweet,
	}
}

export function handleAddTweets(text, replyingTo) {
	return (dispatch, getState) => {
		const {authedUser} = getState()

		dispatch(showLoading())
		
		return saveTweet({
			author: authedUser, 
			text, 
			replyingTo
		})
		.then((tweet)=> dispatch(addTweet(tweet)))
		.then(()=> dispatch(hideLoading()))
	}
}
