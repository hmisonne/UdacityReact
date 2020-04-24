import {
	ADD_DECK,
	ADD_QUESTION,
	RECEIVE_DATA,
	REMOVE_DECK
} from '../actions'
import _ from 'lodash';

function decks(state={}, action) {
	switch (action.type){
		case RECEIVE_DATA:
			return {
				...state,
				...action.decks
			}
		case ADD_DECK:
			return {
				...state,
				...action.newDeck,
			}
		case ADD_QUESTION:
			return {
				...state,
				[action.deck]: {
					...state[action.deck],
					questions: state[action.deck].questions.concat(action.question)
				}
			}
		case REMOVE_DECK:
			return _.omit(state, action.id)

		default:
			return state
	}
} 

export default decks