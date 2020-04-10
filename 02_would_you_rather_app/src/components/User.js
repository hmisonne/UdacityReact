import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser} from '../utils/helpers'

const User = (props) => {
	const formatedUser = formatUser(props.user)
	const {name,
		avatarURL,
		answeredQuestions,
		createdQuestions,
		score} = formatedUser
	return(
		<li>
			<div>{name}</div>
			<div>answeredQuestions: {answeredQuestions}</div>
			<div>createdQuestions: {createdQuestions}</div>
			<div>score: {score}</div>
		</li>
	)
}



export default User

