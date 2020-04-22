import {
	ADD_DECK,
	ADD_QUESTION,
} from '../actions'

function flashcards(state={}, action) {
	switch (action.type){
		case ADD_DECK:
			return {
				...state,
				[action.title]: {
					title: action.title,
					questions: []
				}
			}
		case ADD_QUESTION:
			return {
				...state,
				[action.deck]: {
					...state[action.deck],
					questions: state[action.deck].questions.concat(action.question)
				}
			}
		default:
			return state
	}
} 

export default flashcards