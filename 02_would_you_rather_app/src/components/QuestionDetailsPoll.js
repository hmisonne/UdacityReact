import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class QuestionDetailsPoll extends Component {
	state = {
		selectedOption: 'optionOne'
	}
	handleVote = (e) => {
		e.preventDefault()
		this.props.submitAnswer(this.state.selectedOption)
	}
	handleOptionChange = (e) => {
		const {value} = e.target
		this.setState(()=>({
			selectedOption: value
		}))
	}
	render(){
		const {question} = this.props

		return(
				<form onSubmit={this.handleVote}>
			        <div className="radio">
			          <label>
			            <input type="radio" 
				            value='optionOne' 
				            checked={this.state.selectedOption === 'optionOne'} 
				            onChange={this.handleOptionChange}/>
			            	{question.optionOne.text}
			          </label>
			        </div>
			        <div className="radio">
			          <label>
			            <input 
				            type="radio" 
				            value='optionTwo'
				            checked={this.state.selectedOption === 'optionTwo'} 
				            onChange={this.handleOptionChange}/>
				            {question.optionTwo.text}
			          </label>
			        </div>
			       <button class="btn btn-primary">Vote</button>
			      </form>
		)
	}
}



export default connect()(QuestionDetailsPoll)