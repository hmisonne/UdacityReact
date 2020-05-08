import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleDeleteComment } from '../actions/shared'
import { handleUpdateCommentVote } from '../actions/comments'
import PostDesign from './PostDesign'

class IndividualComment extends Component {

    handleDelete = (e) => {
        e.preventDefault()
        const { dispatch, comment } = this.props
        dispatch(handleDeleteComment(comment.id))
    }
    handleVote = (e) => {
        e.preventDefault()
        const option = e.target.name
        const { dispatch } = this.props
        let updated_comment = this.props.comment

        option === 'upVote' ?
            updated_comment.voteScore = updated_comment.voteScore + 1 :
            updated_comment.voteScore = updated_comment.voteScore - 1

        dispatch(handleUpdateCommentVote(updated_comment, option))
    }
    render() {
        const { author, body, timestamp, voteScore } = this.props.comment
        return (
            <li className='post'> 
	            <PostDesign 
                    postDetail={this.props.comment}
                    handleVote={this.handleVote}
                    handleEdit={this.handleEdit}
                    handleDelete={this.handleDelete}
                    />
                    
	        </li>
        );
    }


}


export default connect()(IndividualComment)