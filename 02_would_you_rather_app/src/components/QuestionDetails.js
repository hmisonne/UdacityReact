import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import QuestionDetailsPoll from './QuestionDetailsPoll'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionDetail extends Component {
	submitAnswer = (answer) => {
		const { dispatch, question } = this.props
		const qid = question.id
		dispatch(handleAnswerQuestion(qid, answer))
	}
	
	render(){
		const {question} = this.props

		return(
			<div className='question'>
				<div>... asks:</div>
				<div>
					Would you rather?
				</div>
				<QuestionDetailsPoll 
					question={question} 
					submitAnswer = {this.submitAnswer}/>
			</div>
		)
	}
}

function mapStateToProps ({authedUser, questions}, props) {
  const { id } = props.match.params

  return {
    question: questions[id]
  }
}

export default connect(mapStateToProps)(QuestionDetail)