import React, { Component } from 'react';
import { connect } from 'react-redux'
import {handleGetPostComments} from '../actions/comments'
import IndividualComment from './IndividualComment'

class PostDetail extends Component {
	componentDidMount() {
		const {id} = this.props
		this.props.dispatch(handleGetPostComments(id))
		
	}
    render() {
        const { id, author, body, category, commentCount, timestamp, title, voteScore } = this.props.postDetail
        const {comments} = this.props
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
			  		<div>Comments {commentCount}</div>
			  		<ul>
			  			{comments.map(comment =>
			  				<IndividualComment
				  				key={comment.id}
				  				comments={comment}/>
			  				)

			  			}
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
    	id,
        comments,
        postDetail
    }
}

export default connect(mapStateToProps)(PostDetail)
