import React from "react";
import { AsyncStorage } from "react-native";
import { DATA_STORAGE_KEY } from './keys'
// import decks from './helpers'

// const DECK_KEY = 'MobileFlashcards:decks'

export async function getDecks () {
// return all of the decks along with their titles, questions, and answers.
	try {
		const results = JSON.parse(await AsyncStorage.getItem(DATA_STORAGE_KEY))
		return results
	} 
	catch(error){
		console.log('error', error)
	}
	
}

export async function getDeck (id) {
// Return the deck associated with that id

	let deck = ''
	try {
		deck = await AsyncStorage.getItem(id)
		if (deck !== null) {
			return deck
		} else {
			console.log('read data error')
		}
	} 
	catch(error){
		console.log('error', error)
	}
	
}

export const addDeckContainer = async(title) => {
// Add title to the decks.	
	try {
		const newDeck = JSON.stringify({
				[title]: {
					title,
					questions: [],
				}
			})
		await AsyncStorage.mergeItem(DATA_STORAGE_KEY, newDeck)

		return JSON.parse(newDeck)
	} catch (e) {
		console.warn(e.message)
	}
}

function addCardToDeck (title, card){
//  Add the card to the list of questions for the deck with the associated title.
	return true
} 


// export async function getDecks () {
// // return all of the decks along with their titles, questions, and answers.
// 	try {
// 		const keys = await AsyncStorage.getAllKeys()
// 		const results = await AsyncStorage.multiGet(keys)
// 		return results
// 	} 
// 	catch(error){
// 		console.log('error', error)
// 	}
	
// }

// export function saveDeckTitle (title) {
// // Add title to the decks.	
// 	let deckData = {
//         title,
//         questions: []
//     }
// 	AsyncStorage.setItem(title, 
//       JSON.stringify(deckData))
// }