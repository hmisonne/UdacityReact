import React from 'react'
import User from './User'
import PropTypes from 'prop-types'

const Leaderboard = (props) => {
	return(
		<div>
			<h4>Leaderboard</h4>
			<ul>
				{props.sortedUsers.map(id => 
					<User 
						key={props.users[id].id}
						user={props.users[id]}/>
					)
					
				}
			</ul>
		</div>
		)
	}



export default Leaderboard

Leaderboard.propTypes = {
    sortedUsers: PropTypes.array.isRequired,
	users: PropTypes.object.isRequired,
}