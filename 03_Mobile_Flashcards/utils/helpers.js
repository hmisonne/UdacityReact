import React from "react";
import { AsyncStorage } from "react-native";
import { DATA_STORAGE_KEY } from './keys'


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
	try {
		getDecks()
			.then(decks =>{
				console.log('d', decks[id])
				return decks[id]
			})
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

export const addCardToDeck = async(title, card) => {
//  Add the card to the list of questions for the deck with the associated title.
	try {
		const results = JSON.parse(await AsyncStorage.getItem(DATA_STORAGE_KEY))
		const currDeck = results[title]
		currDeck.questions.push(card)
		const updatedDeck = {[title]: currDeck}

		return await AsyncStorage.mergeItem(DATA_STORAGE_KEY, JSON.stringify(updatedDeck))
		
	} catch (e) {
		console.warn(e.message)
	}
} 


// export const addCardToDeck = async(title, card) => {
// //  Add the card to the list of questions for the deck with the associated title.
// 	try {
		
// 		getDeck(title)
// 			.then(currDeck => {
// 				console.log('CURR',currDeck)
// 				currDeck.questions.concat(card)
// 				const newCard = JSON.stringify(currDeck)
// 			})
// 			.then(()=> AsyncStorage.mergeItem(DATA_STORAGE_KEY, currDeck))
		
// 	} catch (e) {
// 		console.warn(e.message)
// 	}
// } 
