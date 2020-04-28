import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleDeletePost } from '../actions/shared'

class IndividualPost extends Component {
    handleDelete = (e) => {
    	e.preventDefault()
    	const { dispatch } = this.props
    	const { id } = this.props.postDetail
    	dispatch(handleDeletePost(id))
    }
    render() {
        const { author, body, category, commentCount, timestamp, title, voteScore } = this.props.postDetail
        return (
            <li>
		  		<div>Post {timestamp}</div> 
		  		<div>Post {body}</div> 
		  		<div>{voteScore} Votes</div> 
		  		<button>+</button>
		  		<button>-</button>
		  		<button>edit</button>
		  		<button onClick={this.handleDelete}>delete</button>
		  	</li>
        );
    }


}


function mapStateToProps(state, { id }) {
    return {
        state
    }
}

export default connect(mapStateToProps)(IndividualPost);