import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
	render(){
		return(
			<div>
				Question: {this.props.id}
			</div>
		)
	}
}



export default Question