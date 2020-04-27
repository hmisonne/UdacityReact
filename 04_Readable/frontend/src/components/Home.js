import React from 'react';

function Home() {
  return (
  	<div>
	  	<div>
		    <div>
		      Category
		    </div>
		    <ul>
		    	<li> Cat 1</li>
		    </ul>
		</div>

		<div>
		    <div>
		      Post
		    </div>
		    <ul>
		    	<li> Post 1</li>
		    </ul>
		</div>
	</div>
  );
}

export default Home;

// - List all available categories, which link to a category view for that category
// - List all of the posts
// - Display the number of comments associated with the post.

// Actions:
// - Change the sort method for the list, including order by voteScore and order by timestamp
// - Add a new post
// - Increment or decrement the voteScore of posts