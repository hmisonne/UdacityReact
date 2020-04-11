import React, { Component, Fragment} from 'react';
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import NewQuestions from './NewQuestions'
import QuestionDetails from './QuestionDetails'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	render(){
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					    <div className="container">
					    	<Nav authedUserName={this.props.authedUserName}/>
					    	{this.props.loading === true 
							  	? null
							  	: 
							  	<div>
									<Route exact path='/' component={Dashboard}/>
									<Route path='/add' component={NewQuestions}/>
									<Route path='/questions/:id' component={QuestionDetails}/>
							        <Route exact path='/leaderboard' render={() => (
							          <Leaderboard
							            sortedUsers={this.props.sortedUsers}
							            users={this.props.users}
							          />
							        )} />
							    </div>
						}
				    </div>
			    </Fragment>
			</Router>
		  );
	}
  
}

function mapStateToProps ({ questions, authedUser, users }) {
	let authedUserName = null
	if (users[authedUser] !== undefined) { authedUserName=users[authedUser].name }
	const sortedUsers = Object.keys(users)
		.sort((a,b) => users[b].score - users[a].score)
	return {
		loading: authedUser === null,
		users,
		authedUserName,
		questions,
		sortedUsers
	}
}

export default connect(mapStateToProps)(App);