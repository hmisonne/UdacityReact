import React from 'react'

import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

function DeckCard({ navigation, deck }) {
	return(
		<TouchableOpacity 
			style={styles.row}
			onPress={() => navigation.navigate('DeckView', {deck})}>
			<Text>{deck.title}</Text>
			<Text>{deck.questions.length} cards</Text>
		</TouchableOpacity>
		
		)

}

export default DeckCard

const styles = StyleSheet.create({
  row: {
  	borderColor: 'blue',
    borderWidth: 3,
    marginTop: 3,
  },
});
