import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component{
	state = {
		value: ''
	}
	handleChange = (e) => {
		const {value} = e.target
		this.setState({value})
	}
	handleLogin = (e) => {
		e.preventDefault()
		const user = this.state.value
		const { dispatch } = this.props
		dispatch(setAuthedUser(user))
	}

	render(){
		const {users} = this.props
		const {value} = this.state
		return(
			<div className="container">
			<div className="center">
				<h4>Welcome to Would You Rather App!</h4>
				<div>Please sign in to continue</div>
				<h2>Sign In</h2>
				 <form onSubmit={this.handleLogin}>
				  	<div class="form-group">
				    <select 
				    	class="form-control" 
				    	value={value} 
				    	onChange={this.handleChange}
				    	>
				      <option value="">Select User</option>
						{users.map(user => 
							<option value={user}>{user}</option>
							)
							
						}
				    </select>
				  </div>
				  <button type="submit" disabled = {value ===''} class="btn btn-primary">Submit</button>
				</form>
				</div>
			</div>
		)

	}
} 


function mapStateToProps ({ users }) {
	const userList = Object.keys(users)
		.map(user => user)
	return {
		users: userList,
	}
}

export default connect(mapStateToProps)(Login);

