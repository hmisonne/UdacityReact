import { saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

export function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS,
		tweets
	}
}

export function toggleTweets(id, authedUser, hasLiked) {
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