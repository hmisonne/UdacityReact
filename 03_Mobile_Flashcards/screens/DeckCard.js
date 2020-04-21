import React from 'react'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

function DeckCard({ navigation }) {
	return(
		<TouchableOpacity 
			onPress={() => navigation.navigate('DeckView')}>
			<Text>Deck title</Text>
			<Text># cards</Text>
		</TouchableOpacity>
		)

}

export default DeckCard