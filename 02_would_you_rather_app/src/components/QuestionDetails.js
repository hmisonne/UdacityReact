import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import QuestionDetailsPoll from './QuestionDetailsPoll'

class QuestionDetail extends Component {
	render(){
		const {question} = this.props

		return(
			<div className='question'>
				<div>... asks:</div>
				<div>
					Would you rather?
				</div>
				<QuestionDetailsPoll question={question}/>
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