import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import LoadingBar from 'react-redux-loading'
class App extends Component {
	
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	render() {
		return (
		  <div>
		  <LoadingBar />
		  {this.props.loading === true 
		  	? null
		  	: <NewTweet/>}
		    
		  </div>
		)
	}
}

function mapStateToProps ({authedUser}) {
	return {
		loading: authedUser === null
	}
}

export default connect(mapStateToProps)(App)