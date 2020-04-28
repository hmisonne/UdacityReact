import React, { Component } from 'react';

export default class IndividualComment extends Component {
    render() {
    	const {author, body, timestamp, voteScore} = this.props.comments
        return (
	            <li> 
	            	<div>Post {timestamp}</div> 
			  		<div>Post {body}</div> 
			  		<div>{voteScore} Votes</div> 
			  		<button>+</button>
			  		<button>-</button>
			  		<button>edit</button>
			  		<button>delete</button>
	            </li>
        );
    }


}




