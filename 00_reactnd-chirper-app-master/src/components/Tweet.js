import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'

class Tweet extends Component {
	
	render() {
		const {tweet, authedUser} = this.props

		if (tweet === null){
			return(<p>This tweet does not exist</p>)
		}
		console.log(this.props)
		return (
		  <div className="tweet">
		  	{tweet.name} 
		  </div>
		)
	}
}

function mapStateToProps({authedUser, users, tweets}, {id}){
	const tweet = tweets[id]
	const parentTweet = tweet ? tweets[tweet.replyingTo] : null
	return {
		authedUser,
		tweet: tweet 
			? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
			:  null
	}
}

export default connect(mapStateToProps)(Tweet)