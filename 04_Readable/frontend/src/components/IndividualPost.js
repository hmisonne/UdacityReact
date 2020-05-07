import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleDeletePost } from '../actions/shared'
import {  handleUpdatePost } from '../actions/posts'
import { formatDate } from '../utils/helpers'
import ReplyComment from './ReplyComment'

import { Link, withRouter } from 'react-router-dom'

class IndividualPost extends Component {
    state = {
        replyActive: false
    }
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

        dispatch(handleUpdatePost(updated_post))
    }
    handleReply = (e) => {
        e.preventDefault()
        this.setState((prevState)=> ({
            replyActive: !prevState.replyActive
        }))
    }
    render() {
        const { id, author, body, category, commentCount, timestamp, title, voteScore } = this.props.postDetail

        return (
            <div>
                <div className='post'>
                    <Link to={`/${category}/${id}`}>
                        <div className="post-info">
                            <div>
                                <span>{author}: {title}</span>
                                <div>{formatDate(timestamp)}</div> 
                                <p>{body}</p> 
                            </div>
                            <div className='post-icons'>
                                <div>{voteScore} Votes</div> 
                                <div>{commentCount} Comments</div>
                            
                                <button 
                                    name='upVote'
                                    onClick={this.handleVote}>+</button>
                                <button
                                    name='downVote'
                                    onClick={this.handleVote}>-</button>
                                <button onClick={this.handleEdit}>edit</button>
                                <button onClick={this.handleDelete}>delete</button>
                                <button onClick={this.handleReply}>reply</button>
                            </div>
                        </div>
                    </Link>

                </div>
                {this.state.replyActive &&
                    <ReplyComment parentId={id}/>
                }
            </div>
        );
    }

}


export default withRouter(connect()(IndividualPost));

