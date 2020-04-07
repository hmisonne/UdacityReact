import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveTweets } from '../actions/tweets'

class NewTweet extends Component {
  state = {
    text:''
  }
  handleChange = (e) => {
    const text = e.target.value

    this.setState(()=>({
      text
    }))
  }
  handleSubmit = (e) => {
    e.preventDefault()

    const {text} = this.state
        this.setState(()=>({
          text: ''
        }))
  }
	render() {
    const {text} = this.state
    const tweetLeft = 280 - text.length
    return (
      <div>

        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="What's happening?"
            value={text}
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}/>
            {tweetLeft <= 100 && (
            <div className='tweet-length'>
              {tweetLeft}
            </div>
          )}
          <button  className='btn' disabled={text ===''}>SUBMIT</button>
        </form>
        
      </div>
    )
  }
}

// function mapStateToProps({authedUser, users, tweets}, {id}){
// 	const tweet = tweets[id]
// 	const parentTweet = tweet ? tweets[tweet.replyingTo] : null
// 	return {
// 		authedUser,
// 		tweet: tweet 
// 			? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
// 			:  null
// 	}
// }

export default connect()(NewTweet)