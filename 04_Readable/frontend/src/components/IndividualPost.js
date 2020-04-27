import React from 'react';

function IndividualPost (props) {
	const {id, author, body, category, commentCount, timestamp, title, voteScore} = props.post
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

export default IndividualPost;