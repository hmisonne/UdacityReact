import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
			<Card>
			  <Card.Header>{author} asks:</Card.Header>
			  <Card.Body>
				  <img
			          src={avatar}
			          alt={`Avatar of ${author}`}
			          className='avatar'
			        />
			    <Card.Title>Would you rather?</Card.Title>

			    <Card.Text>
			       {question.optionOne.text} Vs {question.optionTwo.text}
			    </Card.Text>
			    <Button variant="primary"onClick={(e) => this.toPoll(e, id)}>View Poll</Button>
			  </Card.Body>
			</Card>
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