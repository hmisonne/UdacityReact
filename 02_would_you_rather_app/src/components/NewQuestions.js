import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
	}

	handleChange = (e) => {
		const {value, name} = e.target
		this.setState(() => ({
			[name] : value,
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const { dispatch } = this.props
		const { optionOne, optionTwo } = this.state
		dispatch(handleAddQuestion(optionOne, optionTwo))
	}

	render(){
		return(
			<div>
				<h4>Create New Question</h4>
				<div>
					Would you rather... 
				</div>
				<form 
					onSubmit={this.handleSubmit}
					className='new-question'>
					<input
						value = {this.state.optionOne}
						onChange = {this.handleChange}
						placeholder="Enter option one text here"
						name = 'optionOne'/>
					<div> OR </div>
					<input
						value = {this.state.optionTwo}
						onChange = {this.handleChange}
						placeholder="Enter option two text here"
						name = 'optionTwo'/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}



export default connect()(NewQuestion)