import React, { Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Home from './components/Home'
import CreateEdit from './components/CreateEdit'
import PostDetail from './components/PostDetail'
import { handleInitialData } from './actions/shared'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/CreateEdit' component={CreateEdit}/>
          <Route path='/post/:id' component={PostDetail}/>
        </div>
      </Router>
    );
  }
}

export default connect()(App)
