import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export default function DeckView({ route, navigation }) {
	const { deck } = route.params
	return(
		<View>
			<Text>{deck.title}</Text>
			<Text>{deck.questions.length} cards</Text>
			<Button title='Add Card'
				onPress={()=> navigation.navigate('NewQuestion', {deck})}/>
			<Button title='Start Quizz' 
				onPress={()=> navigation.navigate('Quizz', {deck})}/>
			<Button title='Delete'/>
		</View>
	)


}