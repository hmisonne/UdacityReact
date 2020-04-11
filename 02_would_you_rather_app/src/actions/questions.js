import { saveQuestion, saveQuestionAnswer } from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question,
	}
}

export function answerQuestion(authedUser, qid, answer) {
	return {
		type: ANSWER_QUESTION,
		authedUser, 
		qid, 
		answer
	}
}


export function handleAddQuestion(optionOne, optionTwo) {
	return (dispatch, getState) => {
		const {authedUser} = getState()

		return saveQuestion({ 
			optionOneText: optionOne, 
			optionTwoText: optionTwo, 
			author:  authedUser
		})
			.then((question)=> dispatch(addQuestion(question)))

		
	}
}

export function handleAnswerQuestion(qid, answer) {
	return (dispatch, getState) => {
		const {authedUser} = getState()

		return saveQuestionAnswer ({ 
			authedUser, 
			qid, 
			answer 
		})
			.then(()=> dispatch(answerQuestion(authedUser, 
			qid, 
			answer)))

		
	}
}