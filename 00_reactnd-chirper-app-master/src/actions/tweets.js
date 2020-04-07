import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

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

export function handleSaveTweets(text, replyingTo) {
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
