import React from "react";
import { AsyncStorage } from "react-native";
// import decks from './helpers'

// const DECK_KEY = 'MobileFlashcards:decks'

export async function getDecks () {
// return all of the decks along with their titles, questions, and answers.
	let keys = []
	try {
		keys = await AsyncStorage.getAllKeys()
	} 
	catch(error){
		console.log('error', error)
	}
	console.log(keys)
}

export async function getDeck (id) {
// Return the deck associated with that id
	AsyncStorage.getItem(id)
		.then(result => {
			result = JSON.parse(result);
			})
	
}

export function saveDeckTitle (title) {
// Add title to the decks.	
	AsyncStorage.setItem(title,JSON.stringify(title))
}

function addCardToDeck (title, card){
//  Add the card to the list of questions for the deck with the associated title.
	return true
} 
