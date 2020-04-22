import React, {Component} from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/helpers'
import { addQuestion } from '../actions'

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
		const { deck } = this.props.route.params
		const { dispatch } = this.props
		const card = this.state
		addCardToDeck(deck.title, card)
			.then(()=> {
				dispatch(addQuestion(deck.title, card))
			})
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

// function mapDispatchToProps(dispatch, {route, navigation}){
// 	const { deck } = route.params 
// 	return {
// 		deck
// 	}
// }

