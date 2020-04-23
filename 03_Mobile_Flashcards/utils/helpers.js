import React from "react";
import { AsyncStorage } from "react-native";
import { DATA_STORAGE_KEY, NOTIFICATION_KEY } from './keys'
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

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


// export const alertIfRemoteNotificationsDisabledAsync = async () => {
//   const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
//   if (status !== 'granted') {
//     alert('Hey! You might want to enable notifications to receive daily reminders');
//   }
// }

function createNotification () {
	return {
		title: 'Start a quizz!',
		body: "Get ready for your exams! Don't forget to test your memory with a quiz today",
		ios: {
	      sound: true,
	    },
	    android: {
	      sound: true,
	      priority: 'high',
	      sticky: false,
	      vibrate: true,
	    }
	}
}

export function	setLocalNotification () {
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then((data)=> {
			if (data === null) {
				Permissions.askAsync(Permissions.NOTIFICATIONS)
				.then(({ status })=> {
					if (status ==='granted') {
						Notifications.cancelAllScheduledNotificationsAsync()
						let tomorrow = new Date()
						tomorrow.setDate(tomorrow.getDate() + 1)
						tomorrow.setHours(20)
						tomorrow.setMinutes(0)

						Notifications.scheduleLocalNotificationAsync(
							createNotification(), 
							{
								time: tomorrow,
								repeat: 'day',
							}
						)

						AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
					}
				})
			}
		})
}


export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}