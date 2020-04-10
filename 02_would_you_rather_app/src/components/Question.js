import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { withRouter } from 'react-router-dom'

class Question extends Component {
	
	toPoll = (e, id) => {
		e.preventDefault()
		this.props.history.push(`/questions/${id}`)
	}
	render(){
		const {question, authedUser, author} = this.props
		const {id,
		optionOne,
		optionTwo,
		hasReplied,
		author_id,
		avatar,
		timestamp} = question
		return(
			<div className='question'>
				<div>{author} asks:</div>
				<img
		          src={avatar}
		          alt={`Avatar of ${author}`}
		          className='avatar'
		        />
				
				<div>
					Would you rather? {question.optionOne.text} Vs {question.optionTwo.text}
				</div>
				<button onClick={(e) => this.toPoll(e, id)}>View Poll</button>
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

export default withRouter(connect(mapStateToProps)(Question))