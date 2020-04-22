import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export default function DeckView({ route, navigation }) {
	const { deck } = route.params
	const numQuestions = deck.questions
	? deck.questions.length
	: 0
	return(
		<View>
			<Text>{deck.title}</Text>
			<Text>{numQuestions} cards</Text>
			<Button title='Add Card'
				onPress={()=> navigation.navigate('NewQuestion', {deck})}/>
			<Button title='Start Quizz' 
				onPress={()=> navigation.navigate('Quizz', {deck})}/>
			<Button title='Delete'/>
		</View>
	)


}