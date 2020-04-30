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
				    		<li>
							< IndividualPost
								key={post.id}
								id={post.id}
								postDetail={post}/>
							</li>
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
        posts: posts.sort((a,b) => b.timestamp - a.timestamp)
    }
}

export default withRouter(connect(mapStateToProps)(Home));