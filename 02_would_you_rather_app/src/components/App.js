import React, { Component} from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
	}
	render(){
		return (
		    <div className="App">
		      <Dashboard/>
		    </div>
		  );
	}
  
}

export default connect()(App);
