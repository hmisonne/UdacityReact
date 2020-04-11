import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class QuestionDetailsResult extends Component {

	render(){
		const {question} = this.props

		return(
			<div>RESULTS</div>
		)
	}
}



export default connect()(QuestionDetailsResult)