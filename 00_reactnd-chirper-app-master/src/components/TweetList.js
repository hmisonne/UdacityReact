import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'

class TweetList extends Component {
	
	render() {
		return (
				<ul>
					{this.props.tweetIds.map((id) => (
						<li key={id}>
							<Tweet id ={id} /> 
						</li>
					))}
				</ul>
		)
	}
}

function mapStateToProps ({ tweets, users }) {
  return {
    tweetIds: Object.keys(tweets)
      .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    users
  }
}

export default connect(mapStateToProps)(TweetList)