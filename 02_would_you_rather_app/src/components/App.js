import React, { Component, Fragment} from 'react';
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import NewQuestions from './NewQuestions'
import QuestionDetails from './QuestionDetails'
import Nav from './Nav'
import Login from './Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'



class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	logout = () => {
		this.props.dispatch(setAuthedUser(null))
	}
	render(){
		const {authedUser, authedUserName, sortedUsers, users} =this.props
		if (authedUser === null){
			return(
				<Login/>
				)
		}
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					    <div className="container">
					    	<Nav 
					    		authedUserName={authedUserName}
					    		logout={this.logout}/>
					    	{this.props.loading === true 
							  	? null
							  	: 
							  	<div>
									<Route exact path='/' component={Dashboard}/>
									<Route exact path='/login' component={Login}/>
									<Route path='/add' component={NewQuestions}/>
									<Route path='/questions/:id' component={QuestionDetails}/>
							        <Route exact path='/leaderboard' render={() => (
							          <Leaderboard
							            sortedUsers={sortedUsers}
							            users={users}
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
	// Retrieve authed username for NavBar
	let authedUserName = null
	if (users[authedUser] !== undefined) { authedUserName=users[authedUser].name }
	
	// Sort users for leaderboard
	const sortedUsers = Object.keys(users)
		.sort((a,b) => users[b].score - users[a].score)
	return {
		loading: authedUser === null,
		users,
		authedUser,
		authedUserName,
		questions,
		sortedUsers
	}
}

export default connect(mapStateToProps)(App);