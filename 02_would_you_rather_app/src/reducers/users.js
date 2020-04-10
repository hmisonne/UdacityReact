import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION } from '../actions/questions'

export default function users(state={}, action){
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			}
		case ADD_QUESTION:
			const {question} = action
			return {
				...state,
				[question.author] : {
					...state[question.author],
					questions: state[question.author].questions.concat(question.id),
					score: state[question.author].score + 1
				}
			}
		default:
			return state
	}
	
}