import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

class Question extends Component {
	
	toPoll = (e, id) => {
		e.preventDefault()
		this.props.history.push(`/questions/${id}`)
	}
	render(){
		const {question, author} = this.props

		return(
			<Card>
			  <Card.Header>{author.name} asks:</Card.Header>
			  <Card.Body>
				  <img
			          src={author.avatarURL}
			          alt={`Avatar of ${author.name}`}
			          className='avatar'
			        />
			    <Card.Title>Would you rather?</Card.Title>

			    <Card.Text>
			       {question.optionOne.text} Or {question.optionTwo.text}
			    </Card.Text>
			    <button class="btn btn-primary" onClick={(e) => this.toPoll(e, question.id)}>View Poll</button>
			  </Card.Body>
			</Card>
		)
	}
}



export default withRouter(Question)