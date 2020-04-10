import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

const question = {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
}

class QuestionDetailsPoll extends Component {
	state = {
		selectedOption: 'optionOne'
	}
	handleVote = (e) => {
		e.preventDefault()
	}
	handleOptionChange = (e) => {
		const {value} = e.target
		this.setState(()=>({
			selectedOption: value
		}))
	}
	render(){

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
			       <button>Vote</button>
			      </form>
		)
	}
}



export default connect()(QuestionDetailsPoll)