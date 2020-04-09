import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Dashboard extends Component {
	render(){
		const { questions } = this.props
		return(
			<div>
				<ul>
					{this.props.questions.map((id) => (
						<li key={id}>
							<Question id = {id} /> 
						</li>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps ({ questions }) {
  return {
    questions: Object.keys(questions)
    	.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)