import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import QuestionDetailsPoll from './QuestionDetailsPoll'

class QuestionDetail extends Component {
	render(){
		
		return(
			<div className='question'>
				<div>... asks:</div>
				<div>
					Would you rather?
				</div>
				<QuestionDetailsPoll/>
			</div>
		)
	}
}



export default connect()(QuestionDetail)