import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleDeletePost } from '../actions/shared'
import { handleUpdatePostVote } from '../actions/posts'
import { formatDate } from '../utils/helpers'

import { Link, withRouter } from 'react-router-dom'

class IndividualPost extends Component {
    handleDelete = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const { id } = this.props.postDetail
        dispatch(handleDeletePost(id))
    }
    handleEdit = (e) => {
        e.preventDefault()
        const { id, category } = this.props.postDetail
        const { history } = this.props
        history.push(`/${category}/${id}/update`)
    }
    handleVote = (e) => {
        e.preventDefault()
        const option = e.target.name
        const { dispatch } = this.props
        let updated_post = this.props.postDetail

        option === 'upVote' ?
            updated_post.voteScore = updated_post.voteScore + 1 :
            updated_post.voteScore = updated_post.voteScore - 1

        dispatch(handleUpdatePostVote(updated_post, option))
    }
    render() {
        const { id, author, body, category, commentCount, timestamp, title, voteScore } = this.props.postDetail

        return (
            <div>
                <Link to={`/${category}/${id}`}>
                    <div>{formatDate(timestamp)} {author}</div> 
                    <div>Title {title}</div> 
                    <div>Post {body}</div> 
                    <div>{voteScore} Votes</div> 
                    <div>{commentCount} Comments</div>
                </Link>
                <button 
                    name='upVote'
                    onClick={this.handleVote}>+</button>
                <button
                    name='downVote'
                    onClick={this.handleVote}>-</button>
                <button onClick={this.handleEdit}>edit</button>
                <button onClick={this.handleDelete}>delete</button>
            </div>
        );
    }

}


export default withRouter(connect()(IndividualPost));