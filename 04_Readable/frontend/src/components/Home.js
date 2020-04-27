import React, { Component } from 'react';
import IndividualPost from './IndividualPost'
import CategoryList from './CategoryList'

class Home extends Component {
	state = {
		posts: []
	}

	componentDidMount() {
		this.fetchData()
		
	}
	fetchData = () => {
	  	fetch(
		    "http://127.0.0.1:3001/posts",
		    {
		        headers: { 'Authorization': 'receive_posts' }
		    }
		)
			.then(res => res.json())
			.then(posts => this.setState(()=> ({
			posts
		})))
	  }

	render() {
		const { posts } = this.state
		return (
		  	<div>
		  		<button>Sort</button>
		  		<button>Add post</button>
			  	<div>
				    <div>
				      Category
				    </div>
				    <ul>
				    	<CategoryList />	
				    	
				    </ul>
				</div>

				<div>
				    <div>
				      Post
				    </div>
				    <ul>
				    	{ posts.map((post) =>
							< IndividualPost
								key={post.id}
								post={post}/>
				    		)
				    	
				    	}
				    	
				    </ul>
				</div>
			</div>
		  );
			}
  
}

export default Home;

// - List all available categories, which link to a category view for that category
// - List all of the posts
// - Display the number of comments associated with the post.

// Actions:
// - Change the sort method for the list, including order by voteScore and order by timestamp
// - Add a new post
// - Increment or decrement the voteScore of posts