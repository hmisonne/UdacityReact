import React, { Component, Fragment} from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import NewQuestions from './NewQuestions'
import QuestionDetails from './QuestionDetails'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	render(){
		return (
			<Router>
				<Fragment>
				    <div className="container">
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
			    </Fragment>
			</Router>
		  );
	}
  
}

function mapStateToProps ({ questions, authedUser, users }) {
	const sortedUsers = Object.keys(users)
		.sort((a,b) => users[b].score - users[a].score)
	return {
		users,
		questions,
		sortedUsers
	}
}

export default connect(mapStateToProps)(App);
// <QuestionDetails id='8xf0y6ziyjabvozdd253nd'/>