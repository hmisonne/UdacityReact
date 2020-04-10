import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Button from 'react-bootstrap/Button';

class Dashboard extends Component {
	state = {
		showUnanswered: true,
	}

	onToggle = () => {
		this.setState((prevState) => ({
			showUnanswered: !prevState.showUnanswered
		}))
	}

	render(){
		const {unansweredQuestions, answeredQuestions} = this.props
		const {showUnanswered}= this.state
		let visibleQuestions
		showUnanswered 
		? visibleQuestions = unansweredQuestions
		: visibleQuestions = answeredQuestions
		return(
			<div>
				<h4>Dashboard</h4>
				<Button 
					onClick = {this.onToggle}
					disabled={!showUnanswered}>Answered</Button>
				<Button 
					onClick = {this.onToggle}
					disabled={showUnanswered}>Unanswered</Button>
				<ul>
					{visibleQuestions.map((question) => (
						<li key={question.id}>
							<Question id = {question.id} /> 
						</li>
					))}
				</ul>
			</div>
		)
	}
}
	


function mapStateToProps ({ questions, authedUser, users }) {
	const user = users[authedUser]
	let answeredQuestionIds = []
	if (user !== undefined) {answeredQuestionIds = user.answers} 

	let unansweredQuestions = []
	let answeredQuestions = []

	for (const key in questions) {
		if (answeredQuestionIds[key] === undefined){
			unansweredQuestions.push(questions[key])
		} else
		{
			answeredQuestions.push(questions[key])
		}
	}


	return {
		unansweredQuestions,
		answeredQuestions
	}
}
export default connect(mapStateToProps)(Dashboard)


	// return {
	// 	answeredQuestionIds,
	// 	allQuestions: Object.keys(questions)
	// 		.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
	// }

								// 