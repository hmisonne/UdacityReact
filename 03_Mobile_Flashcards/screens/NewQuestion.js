import React, {Component} from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/helpers'
import { addQuestion } from '../actions'
import { CommonActions } from '@react-navigation/native';

class NewQuestion extends Component{
	state = {
		question: '',
		answer:''
	}

	onChangeText(name) {
		return (text) =>{
			this.setState(()=> ({
				[name]:text
		}))
		}
		
	}

	onSubmit = () => {
		const { deckId } = this.props.route.params
		const { dispatch } = this.props
		const card = this.state
		addCardToDeck(deckId, card)
			.then(()=> {
				dispatch(addQuestion(deckId, card))
			})
		this.navigateToDeckView()
	}
	navigateToDeckView = () => {
		const { deckId } = this.props.route.params
		const {navigation} = this.props
		navigation.navigate('DeckView', {deckId})
	}

	render(){
		const { question, answer } = this.state
		return(
			<View>
				<Text>Question</Text>
				<TextInput
			      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
			      onChangeText={this.onChangeText('question')}
			      value={question}
			    />
			    <Text>Answer</Text>
				<TextInput
			      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
			      onChangeText={this.onChangeText('answer')}
			      value={answer}
			    />
			    <Button 
			    	title= 'Submit' 
			    	onPress={this.onSubmit}/>
			</View>
		)
	}
}


export default connect()(NewQuestion)
