import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweets } from '../actions/tweets'

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
    const {dispatch, id } = this.props
    const {text} = this.state
    
    dispatch(handleAddTweets(text, id))
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


export default connect()(NewTweet)