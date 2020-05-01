import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleDeleteComment } from '../actions/shared'

 class IndividualComment extends Component {
    
 	handleDelete = (e) => {
 		e.preventDefault()
 		const { dispatch, comment } = this.props
 		dispatch(handleDeleteComment(comment.id))
 	}
    render() {
    	const {author, body, timestamp, voteScore} = this.props.comment
        return (
	            <li> 
	            	<div>Post {timestamp} {author}</div> 
			  		<div>Post {body}</div> 
			  		<div>{voteScore} Votes</div> 
			  		<button>+</button>
			  		<button>-</button>
			  		<button>edit</button>
			  		<button onClick = {this.handleDelete}>delete</button>
	            </li>
        );
    }


}


export default connect()(IndividualComment)

