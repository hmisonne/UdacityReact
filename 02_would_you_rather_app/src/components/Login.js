import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component{

	handleLogin = (e) => {
		e.preventDefault()
		console.log(e)
		// const { dispatch } = dispatch
		// dispatch(setAuthedUser(user))

	}
	render(){
		const {users} = this.props
		console.log(users)
		return(
			<div>
			<h4>Sign In</h4>
				<select>
				<option value="" disabled>Select User</option>
				{users.map(user => 
					<option value={user}>{user}</option>
					)
					
				}
			</select>
			<button onClick={this.handleLogin}>Sign In</button>
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