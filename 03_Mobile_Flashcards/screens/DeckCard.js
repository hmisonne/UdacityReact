import React from 'react'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

function DeckCard({ navigation, deck }) {
	console.log('dddd',deck)
	return(
		<TouchableOpacity 
			onPress={() => navigation.navigate('DeckView')}>
			<Text>{deck.title}</Text>
			<Text>{deck.questions.length} cards</Text>
		</TouchableOpacity>
		
		)

}

export default DeckCard