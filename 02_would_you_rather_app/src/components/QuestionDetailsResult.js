import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import ProgressBar from 'react-bootstrap/ProgressBar'


class QuestionDetailsResult extends Component {

	render(){
		const {question, userReply} = this.props
		const optionOneVotes = question.optionOne.votes.length;
		const optionTwoVotes = question.optionTwo.votes.length;
		const totalVotes = optionOneVotes + optionTwoVotes
		const optionOneResult = optionOneVotes / (totalVotes)*100
		const optionTwoResult = Math.abs(optionOneResult - 100)
		return(
			<div>
				<div> Would you rather ...</div>
				<ProgressBar now={optionOneResult} label={`${optionOneResult}%`} />
				<div>{optionOneVotes} out of {totalVotes}</div>
				<div> Would you rather ...</div>
				<ProgressBar now={optionTwoResult} label={`${optionTwoResult}%`} />
				<div>{optionTwoVotes} out of {totalVotes}</div>
			</div>
		)
	}
}




export default connect()(QuestionDetailsResult)