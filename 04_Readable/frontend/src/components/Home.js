import React, { Component } from 'react';
import IndividualPost from './IndividualPost'
import CategoryList from './CategoryList'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Home extends Component {

    render() {
        const { posts } = this.props
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
				    		<Link to={`/post/${post.id}`}>
							< IndividualPost
								key={post.id}
								id={post.id}
								postDetail={post}/>
							</Link>
				    		)
				    	
				    	}
				    	
				    </ul>
				</div>	
			</div>
        );
    }

}

function mapStateToProps({posts}) {

    return {
        posts
    }
}

export default withRouter(connect(mapStateToProps)(Home));