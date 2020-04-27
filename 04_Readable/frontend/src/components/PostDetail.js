import React, { Component } from 'react';
import { connect } from 'react-redux'


class PostDetail extends Component {
    render() {
        const { id, author, body, category, commentCount, timestamp, title, voteScore } = this.props.postDetail
        return (

	            <div>
			  		<div>Post {timestamp}</div> 
			  		<div>Post {body}</div> 
			  		<div>{voteScore} Votes</div> 
			  		<button>+</button>
			  		<button>-</button>
			  		<button>edit</button>
			  		<button>delete</button>
			  		<button>Add Comment</button>
			  		<div>Comments </div>
			  		<ul>
			  			<li>comment 1 </li>
			  		</ul>
			  	</div>

        );
    }


}


function mapStateToProps({comments, posts}, props) {
	const { id } = props.match.params
	let postDetail = {}
	if (posts.length !== 0) {
		postDetail=posts.filter(post => post.id === id)[0]
	}
    return {
        comments,
        postDetail
    }
}

export default connect(mapStateToProps)(PostDetail)
