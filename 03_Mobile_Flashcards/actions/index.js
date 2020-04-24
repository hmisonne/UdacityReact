export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const REMOVE_DECK = 'REMOVE_DECK'

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

export function removeDeck(id) {
    return {
        type: REMOVE_DECK,
        id
    }
}