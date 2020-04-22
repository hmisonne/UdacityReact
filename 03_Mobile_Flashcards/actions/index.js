export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_DATA = 'RECEIVE_DATA'

export function addDeck(newDeck) {
	return {
		type: ADD_DECK,
		newDeck
	}
}

export function addQuestion(deck, question) {
	return {
		type: ADD_QUESTION,
		question, 
		deck
	}
}

export function receiveData(decks) {
	return {
		type: RECEIVE_DATA,
		decks, 
	}
}