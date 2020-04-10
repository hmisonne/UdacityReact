import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
class Question extends Component {
	render(){
		const {question, authedUser, author} = this.props
		const {id,
		optionOne,
		optionTwo,
		hasReplied,
		author_id,
		avatar: avatarURL,
		timestamp} = question
		return(
			<div className='question'>
				<div>{author} asks:</div>
				<div>
					Would you rather? {question.optionOne.text} Vs {question.optionTwo.text}
				</div>
				<button>View Poll</button>
			</div>
		)
	}
}

function mapStateToProps({questions, authedUser, users}, {id}){
	const question = questions[id]
	const author = users[question.author].name
	return{
		author,
		authedUser,
		question: question
		? formatQuestion(question, users[question.author], authedUser)
		: null
	}
}

export default connect(mapStateToProps)(Question)