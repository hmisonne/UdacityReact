import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function DeckView() {
		return(
			<View>
				<Text>Deck title</Text>
				<Text># cards</Text>
				<Button title='Add Card'/>
				<Button title='Start Quizz'/>
				<Button title='Delete'/>
			</View>
			)

}