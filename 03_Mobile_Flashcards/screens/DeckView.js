import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export default function DeckView({navigation}) {
		return(
			<View>
				<Text>Deck title</Text>
				<Text># cards</Text>
				<Button title='Add Card'
					onPress={()=> navigation.navigate('NewQuestion')}/>
				<Button title='Start Quizz' 
					onPress={()=> navigation.navigate('Quizz')}/>
				<Button title='Delete'/>
			</View>
			)

}