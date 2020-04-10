import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'

const Leaderboard = (props) => {

		return(
			<div>
			<h4>Leaderboard</h4>
			<ul>
				{props.sortedUsers.map(id => 
					<User user={props.users[id]}/>
					)
					
				}
			</ul>
			</div>
		)
	}



export default Leaderboard