import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDetailsPoll from './QuestionDetailsPoll'
import QuestionDetailsResult from './QuestionDetailsResult'
import { handleAnswerQuestion } from '../actions/questions'
import Card from 'react-bootstrap/Card';

class QuestionDetail extends Component {
	submitAnswer = (answer) => {
		const { dispatch, question } = this.props
		const qid = question.id
		dispatch(handleAnswerQuestion(qid, answer))
	}
	
	render(){
		const {question, author, userReply} = this.props
		return(
			<div className='question'>
			<Card>
			<Card.Header>{author.name} asks:</Card.Header>

			  <Card.Body>
		  			<img
		          src={author.avatarURL}
		          alt={`Avatar of ${author.name}`}
		          className='avatar'
		        />
			  	<Card.Title>Would you rather?</Card.Title>
				{userReply === null 
					? <QuestionDetailsPoll 
						question={question} 
						submitAnswer = {this.submitAnswer}/>
					: <QuestionDetailsResult
						question={question}
						userReply={userReply}/>
				}
			</Card.Body>
			</Card>
			</div>
		)
	}
}

function mapStateToProps ({authedUser, questions, users}, props) {
  const { id } = props.match.params
  const question = questions[id]
  const userReply = users[authedUser].answers[id] 
  ? users[authedUser].answers[id]
  : null
  const author = users[question.author]

  return {
    question,
    author,
    userReply
  }
}

export default connect(mapStateToProps)(QuestionDetail)