import React, { Component} from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import NewQuestions from './NewQuestions'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	render(){
		return (
		    <div className="container">
		      <Dashboard />
		      <Leaderboard sortedUsers={this.props.sortedUsers} users={this.props.users}/>
		      <NewQuestions/>
		    </div>
		  );
	}
  
}

function mapStateToProps ({ questions, authedUser, users }) {
	const sortedUsers = Object.keys(users)
		.sort((a,b) => users[b].score - users[a].score)
	return {
		users,
		sortedUsers
	}
}

export default connect(mapStateToProps)(App);
