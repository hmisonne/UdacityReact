import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
class Question extends Component {
	render(){
		const {question, authedUser} = this.props
		const {id,
		optionOne,
		optionTwo,
		hasReplied,
		author_id,
		avatar: avatarURL,
		timestamp} = question
		return(
			<div>
				Would you rather? {question.optionOne.text} Vs {question.optionTwo.text}
			</div>
		)
	}
}

function mapStateToProps({questions, authedUser, users}, {id}){
	const question = questions[id]
	return{
		authedUser,
		question: question
		? formatQuestion(question, users[question.author], authedUser)
		: null
	}
}

export default connect(mapStateToProps)(Question)