import React, {Component} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export default class Quizz extends Component{
	state = {
		showAnswer: false,
		quizzCompleted: false,
		currQuestion: {},
		indexQuestion: 1,
		numCorrect: 0
	}
	componentDidMount() {
		this.startQuizz()
	}

	startQuizz = () => {
		const { deck } = this.props.route.params
		if (deck.questions.length >0) {
			this.setState(()=>({
				showAnswer: false,
				quizzCompleted: false,
				currQuestion: deck.questions[0],
				indexQuestion: 1,
				numCorrect: 0
			}))
		}
		
	}
	submitAnswer = (correctAnswer) => {
		// Update count of Correct Answers
		if (correctAnswer) {
			this.setState((prevState)=>({
				numCorrect: prevState.numCorrect + 1
			}))
		}
		// Check if end of the quizz
		const { deck } = this.props.route.params

		if (this.state.indexQuestion === deck.questions.length) {
			this.setState(()=>({
				quizzCompleted: true,
			}))
		}
		else {
			this.getNextQuestion()
		}


	}
	getNextQuestion = () => {
		const { deck } = this.props.route.params
		const indexQuestion = this.state.indexQuestion + 1
		// index question base 0
		const currQuestion = deck.questions[indexQuestion-1] 
		this.setState((prevState)=>({
			showAnswer: false,
			currQuestion,
			indexQuestion
		}))
	}
	onToggle = () =>{
		this.setState((prevState)=>({
			showAnswer: !prevState.showAnswer
		}))
	}
	render(){
		const { currQuestion, indexQuestion, numCorrect, showAnswer, quizzCompleted } = this.state
		const { deck } = this.props.route.params
		const totalNumQuestions = deck.questions.length
		// If Deck is empty (no question entered)
		if (currQuestion === '') {
			return (
				<View>
					<Text>Quizz</Text>
					<Text>No Card</Text>
				</View>
				)
		}
		// If Quizz is completed
		if (quizzCompleted) {
			return (
				<View>
					<Text>End of Quizz</Text>
					<Text>Correct Answer(s): {numCorrect} / {totalNumQuestions}</Text>
					<Button 
						title="Restart Quizz"
						onPress={() => this.startQuizz()}/>
				</View>
				)
		}
		if (showAnswer) {
			return (
			<View>
				
				<Text>Quizz</Text>
				<Text>{currQuestion.answer}</Text>
				<Button 
					title="Go Back"
					onPress={this.onToggle}/>
			</View>
				)
		}
		return(
			<View>
				<Text>Quizz</Text>
				<Text>{currQuestion.question}</Text>
				<Button 
					title="Show Answer"
					onPress={this.onToggle}/>
				<Button 
					title="Correct"
					onPress={() => this.submitAnswer(true)}/>
				<Button 
					title="Incorrect"
					onPress={() => this.submitAnswer(false)}/>

			</View>
		)
	}
}
