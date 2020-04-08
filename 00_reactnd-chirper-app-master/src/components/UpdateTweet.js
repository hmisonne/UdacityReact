import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddTweets } from '../actions/tweets'
import { Redirect } from 'react-router-dom'

class UpdateTweet extends Component {
  state = {
    text:'',
    toHome: false,
  }
  componentDidMount() {
    const { tweet } = this.props
    this.setState(()=>({
      text: tweet.text
    }))
  }
  handleChange = (e) => {
    const text = e.target.value
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {dispatch, id } = this.props
    const {text, toHome} = this.state

    dispatch(handleAddTweets(text, id))
    this.setState(()=>({
      text: '',
      toHome: id ? false : true
    }))
  }
	render() {
    const {text, toHome} = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }
    const tweetLeft = 280 - text.length
    return (
      <div>

        <h3 className='center'>Update Tweet</h3>
        <form className='new-tweet' onSubmit={this.handleSubmit}>
          <textarea
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

function mapStateToProps ({authedUser, tweets}, props) {
  console.log('params', props)
  const { id } = props.match.params
  return {
    tweet: tweets[id]
  }
}

export default connect(mapStateToProps)(UpdateTweet)