import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleDeleteComment } from '../actions/shared'
import { handleUpdateCommentVote } from '../actions/comments'

class IndividualComment extends Component {

    handleDelete = (e) => {
        e.preventDefault()
        const { dispatch, comment } = this.props
        dispatch(handleDeleteComment(comment.id))
    }
    handleVote = (e) => {
        e.preventDefault()
        const option = e.target.name
        const { dispatch } = this.props
        let updated_comment = this.props.comment

        option === 'upVote' ?
            updated_comment.voteScore = updated_comment.voteScore + 1 :
            updated_comment.voteScore = updated_comment.voteScore - 1

        dispatch(handleUpdateCommentVote(updated_comment, option))
    }
    render() {
        const { author, body, timestamp, voteScore } = this.props.comment
        return (
            <li> 
	            	<div>Post {timestamp} {author}</div> 
			  		<div>Post {body}</div> 
			  		<div>{voteScore} Votes</div> 
			  		<button 
	                    name='upVote'
	                    onClick={this.handleVote}>+</button>
               		 <button
	                    name='downVote'
	                    onClick={this.handleVote}>-</button>
			  		<button>edit</button>
			  		<button onClick = {this.handleDelete}>delete</button>
	            </li>
        );
    }


}


export default connect()(IndividualComment)