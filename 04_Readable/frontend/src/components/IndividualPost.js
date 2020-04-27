import React from 'react';

function IndividualPost() {
  return (
  	<li>
  		<div>Post timestamp</div> 
  		<div>Post content</div> 
  		<div># Votes</div> 
  		<button>+</button>
  		<button>-</button>
  		<button>edit</button>
  		<button>delete</button>
  	</li>
  );
}

export default IndividualPost;