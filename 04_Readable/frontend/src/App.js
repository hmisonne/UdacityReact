import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Home from './components/Home'
import CreateEdit from './components/CreateEdit'
import PostDetail from './components/PostDetail'
import { handleInitialData } from './actions/shared'
import Nav from './components/Nav'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }
    render() {
        return (
            <Router>
              <Fragment>
                <div>
                  <Nav />
                  <div className="App">
                    <Route exact path='/' component={Home}/>
                    <Route path='/new' component={CreateEdit}/>
                    <Route path='/post/:id' component={PostDetail}/>
                    <Route path='/update/:id' component={CreateEdit}/>
                  </div>
                </div>
              </Fragment>
            </Router>
        );
    }
}

export default connect()(App)