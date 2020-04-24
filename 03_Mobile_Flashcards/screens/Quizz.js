import React, {Component} from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import {  
	clearLocalNotification,
  	setLocalNotification
} from '../utils/helpers'
import SubmitBtn from '../components/SubmitBtn'
import { Ionicons } from "@expo/vector-icons";
import PropTypes from 'prop-types'

export default class Quizz extends Component{
	static propTypes = {
		route: PropTypes.object.isRequired,
		navigation: PropTypes.object.isRequired,
	}
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

		clearLocalNotification()
			.then(setLocalNotification)
		
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
	goHome = () => {
		const {navigation} = this.props;
		const { deck } = this.props.route.params;
		navigation.dispatch(CommonActions.goBack({
			key: 'DeckView'
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
		if (currQuestion.question === undefined) {
			return (
				<View style={styles.center}>
					<Text style={styles.textTitle}>This quiz is currently empty. To start playing add new cards!</Text>
					<Ionicons name={"ios-hand"} size={100} />
					
				</View>
				)
		}
		// If Quizz is completed
		if (quizzCompleted) {
			return (
				<View style={styles.centered}>

					<Text style={styles.textTitle}>Correct Answer(s): {numCorrect} / {totalNumQuestions}</Text>
					<View>
						<SubmitBtn
							onPress={this.startQuizz}>
							Restart Quizz
						</SubmitBtn>
						<SubmitBtn
							onPress={this.goHome}>
							Back to Deck
						</SubmitBtn>
					</View>
				</View>
				)
		}
		return(
			<View style={styles.container}>
				<Text>{indexQuestion}/{totalNumQuestions}</Text>
				<View style={styles.centered}>
					<View>
						<Text style={styles.textTitle}>
							{showAnswer
								? currQuestion.answer
								: currQuestion.question
							}</Text>
						<SubmitBtn
							onPress={this.onToggle}>
							{showAnswer
								? 'Question'
								: 'Show Answer'
							}
							
						</SubmitBtn>
					</View>
					<View>
						<SubmitBtn
							style={{backgroundColor: 'green'}}
							onPress={() => this.submitAnswer(true)}>
							Correct
						</SubmitBtn>
						<SubmitBtn
							style={{backgroundColor: 'red'}}
							onPress={() => this.submitAnswer(false)}>
							Incorrect
						</SubmitBtn>
					</View>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
  	flex: 1,
  	alignItems: "center",
  	justifyContent: 'space-around'
  },
  centered:{
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