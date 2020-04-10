import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
	state = {
		showUnanswered: false,
	}



	render(){
		const {unansweredQuestions, answeredQuestions} = this.props
		let visibleQuestions
		this.state.showUnanswered 
		? visibleQuestions = unansweredQuestions
		: visibleQuestions = answeredQuestions
		console.log('v',visibleQuestions)
		return(
			<div>
				<h4>Dashboard</h4>
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