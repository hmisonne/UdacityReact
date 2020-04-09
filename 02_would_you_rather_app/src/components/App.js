import React, { Component} from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'

class App extends Component {
	componentDidMount(){
		this.props.dispatch(handleInitialData())
		console.log(this.props)
	}
	render(){
		return (
		    <div className="App">
		      Hello World
		    </div>
		  );
	}
  
}

export default connect()(App);
