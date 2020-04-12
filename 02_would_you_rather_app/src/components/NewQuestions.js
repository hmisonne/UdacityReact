import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

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
		this.props.history.push('/')
	}

	render(){
		return(
			<div className='center'>
				<h4>Create New Question</h4>

				<Form onSubmit={this.handleSubmit}>
				  <Form.Group>
				  	<Form.Label>Would you rather... </Form.Label>
				    <Form.Control 
				    	value = {this.state.optionOne}
						onChange = {this.handleChange}
				    	type="text" 
				    	placeholder="Enter option one text here" 
				    	name = 'optionOne'/>
				  </Form.Group>

				  <Form.Group>
				    <Form.Label>OR</Form.Label>
				    <Form.Control
					    value = {this.state.optionTwo}
						onChange = {this.handleChange} 
					    type="text" 
					    placeholder="Enter option two text here" 
					    name = 'optionTwo'/>
				  </Form.Group>
				  <button class="btn btn-primary" type="submit">
				    Submit
				  </button>
				</Form>

			</div>
		)
	}
}



export default withRouter(connect()(NewQuestion))
