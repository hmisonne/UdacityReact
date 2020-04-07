import { getInitialData} from '../utils/api' as API;
import {receiveUsers} from './users'
import {receiveTweets} from './tweets'

export function handleInitialData () {
	return dispatch => {
		return getInitialData()
			.then(({users,tweets})=>{
				dispatch(receiveUsers(users))
				dispatch(receiveTweets(tweets))
			})
	}
}
