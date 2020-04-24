import React, { Component} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import SubmitBtn from '../components/SubmitBtn'
import { lightGreen, grey } from '../utils/colors'

class DeckView extends Component {
	navigateToNewQuestion = () => {
		const { deck, navigation } = this.props
		navigation.navigate('NewQuestion', {deckId : deck.title})
	}
	navigateToQuizz = () => {
		const { deck, navigation } = this.props
		navigation.navigate('Quizz', {deck})
	}
	render() {
		const { deck, navigation } = this.props
		const numQuestions = deck.questions.length

		return(
			<View style={styles.container}>
				<View>
					<Text style={styles.textTitle}>{deck.title}</Text>
					<Text style={styles.textSmall}>{numQuestions} cards</Text>
				</View>
				<View>
					<SubmitBtn
						onPress={this.navigateToNewQuestion}>
						Add Card
					</SubmitBtn>
					<SubmitBtn
						onPress={this.navigateToQuizz}>
						Start Quiz
					</SubmitBtn>
					<SubmitBtn
						style={{backgroundColor: 'red'}}>
						Delete
					</SubmitBtn>
				</View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  textTitle: {
  	textAlign:'center',
  	fontSize: 30
  },
  textSmall: {
  	textAlign:'center',
  	fontSize: 20
  }
  
});