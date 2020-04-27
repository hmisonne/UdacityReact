import React, { Component } from 'react';
import { connect } from 'react-redux'

class IndividualPost extends Component {
    render() {
        const { author, body, category, commentCount, timestamp, title, voteScore } = this.props.postDetail
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


function mapStateToProps(state, { id }) {
    console.log('postit', state)
    console.log('id', id)
    return {
        post: state[id]
    }
}

export default connect(mapStateToProps)(IndividualPost);