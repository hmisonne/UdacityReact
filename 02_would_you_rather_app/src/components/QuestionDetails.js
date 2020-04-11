import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import QuestionDetailsPoll from './QuestionDetailsPoll'
import QuestionDetailsResult from './QuestionDetailsResult'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionDetail extends Component {
	submitAnswer = (answer) => {
		const { dispatch, question } = this.props
		const qid = question.id
		dispatch(handleAnswerQuestion(qid, answer))
	}
	
	render(){
		const {question, author, userReply} = this.props
		console.log(userReply)
		return(
			<div className='question'>
				<div>{author.name} asks:</div>
				<div>
					Would you rather?
				</div>
				{userReply === null 
					? <QuestionDetailsPoll 
						question={question} 
						submitAnswer = {this.submitAnswer}/>
					: <QuestionDetailsResult
						question={question}/>
				}
				
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