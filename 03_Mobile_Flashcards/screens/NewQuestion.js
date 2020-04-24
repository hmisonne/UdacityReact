import React, {Component} from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/helpers'
import { addQuestion } from '../actions'
import { CommonActions } from '@react-navigation/native';
import SubmitBtn from '../components/SubmitBtn'
import StyledTextInput from '../components/StyledTextInput'

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
			<View style={styles.container}>
				<View>
					<Text style={styles.textTitle}>Question</Text>
					<StyledTextInput
				      onChangeText={this.onChangeText('question')}
				      value={question}
				      placeholder="How do you say Lampeshade in French?"
				    />
				    <Text style={styles.textTitle}>Answer</Text>
					<StyledTextInput
				      onChangeText={this.onChangeText('answer')}
				      value={answer}
				      placeholder="Abat-jour"
				    />
			    </View>
			    <View>
				    <SubmitBtn 
				    	onPress={this.onSubmit}>Submit</SubmitBtn>
			    </View>
			</View>
		)
	}
}


export default connect()(NewQuestion)


const styles = StyleSheet.create({
  container: {
  	flex: 1,
    justifyContent: "space-around",
  },
  textTitle: {
  	textAlign:'center',
  	fontSize: 30
  },
});
