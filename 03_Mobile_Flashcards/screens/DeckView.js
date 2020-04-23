import React, { Component} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {
	render() {
		const { deck, navigation } = this.props
		const numQuestions = deck.questions.length
		return(
			<View>
				<Text>{deck.title}</Text>
				<Text>{numQuestions} cards</Text>
				<Button title='Add Card'
					onPress={()=> navigation.navigate('NewQuestion', {deckId : deck.title})}/>
				<Button title='Start Quizz' 
					onPress={()=> navigation.navigate('Quizz', {deck})}/>
				<Button title='Delete'/>
			</View>
		)
	}

}

function mapStateToProps(state, {route}){
	const {deckId} = route.params
	return {
		deck: state[deckId]
	}
}
export default connect(mapStateToProps)(DeckView)