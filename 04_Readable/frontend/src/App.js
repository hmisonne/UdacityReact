import React, { Component} from 'react';
import { connect } from 'react-redux'
import './App.css';
import Home from './components/Home'
import CreateEdit from './components/CreateEdit'
import { handleInitialData } from './actions'
import { getInitialData } from './utils/api'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default connect()(App)
