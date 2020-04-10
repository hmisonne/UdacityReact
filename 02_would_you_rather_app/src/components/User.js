import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser} from '../utils/helpers'
import Card from 'react-bootstrap/Card';

const User = (props) => {
	const formatedUser = formatUser(props.user)
	const {name,
		avatarURL,
		answeredQuestions,
		createdQuestions,
		score} = formatedUser
	return(
		<li>
			<Card style={{ width: '18rem' }}>
			  
			  <Card.Body>

			    <Card.Title>{name}</Card.Title>
			    <img src={avatarURL}
			    	alt={`Avatar of ${name}`}
			        className='avatar' />
			    <Card.Text>
			      Answered Questions: {answeredQuestions}
			    </Card.Text>
			    <Card.Text>
			      Created Questions: {createdQuestions}
			    </Card.Text>
			     <Card.Text>
			      Score: {score}
			    </Card.Text>
			  </Card.Body>
			</Card>
		</li>
	)
}



export default User
