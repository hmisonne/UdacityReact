import React from 'react'
import User from './User'

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