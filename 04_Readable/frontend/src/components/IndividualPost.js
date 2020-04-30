import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleDeletePost } from '../actions/shared'
import { handleUpdatePostVote } from '../actions/posts'

import { Link, withRouter } from 'react-router-dom'

class IndividualPost extends Component {
    handleDelete = (e) => {
    	e.preventDefault()
    	const { dispatch } = this.props
    	const { id } = this.props.postDetail
    	dispatch(handleDeletePost(id))
    }
    handleEdit = (e) => {
        const {id, history} = this.props
        e.preventDefault()
        history.push(`/update/${id}`)
    }
    handleVote = (e) => {
        e.preventDefault()
        const option = e.target.name
        const { dispatch } = this.props
        let updated_post = this.props.postDetail
        console.log('o',option)
        option === 'upVote'
        ? updated_post.voteScore = updated_post.voteScore + 1
        : updated_post.voteScore = updated_post.voteScore - 1
        console.log('u',updated_post)
        dispatch(handleUpdatePostVote(updated_post, option))
    }
    render() {
        const { author, body, category, commentCount, timestamp, title, voteScore } = this.props.postDetail
        const {id} = this.props

        return (
            <li>
                <Link to={`/post/${id}`}>
    		  		<div>Post {timestamp}</div> 
    		  		<div>Post {body}</div> 
    		  		<div>{voteScore} Votes</div> 
                </Link>
		  		<button 
                    name='upVote'
                    onClick={this.handleVote}>+</button>
		  		<button
                    name='downVote'
                    onClick={this.handleVote}>-</button>
		  		<button onClick={this.handleEdit}>edit</button>
		  		<button onClick={this.handleDelete}>delete</button>
		  	</li>
        );
    }

}


function mapStateToProps(props, { id }) {
    return {
        post: null
    }
}

export default withRouter(connect(mapStateToProps)(IndividualPost));
