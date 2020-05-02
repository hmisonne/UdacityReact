import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddComment } from '../actions/comments'
import { generateUID } from '../utils/helpers'

class ReplyComment extends Component {
    state = {
        currComment: {
            body: '',
            author: '',
        },
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState((currState) => ({
            ...currState,
            currComment: {
                ...currState.currComment,
                [name]: value
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { body, author } = this.state.currComment
        const { dispatch, parentId } = this.props
        let new_comment = {
            body,
            author,
            id: generateUID(),
            parentId,
            timestamp: Date.now()
        }
        dispatch(handleAddComment(new_comment))

    }

    render() {
        console.log(this.props)
        const { body , author } = this.state.currComment
        return (
            <div>

            <form onSubmit={this.handleSubmit}>
                
                <label>
                  Body:
                  <input
                    name="body"
                    type="text"
                    value={body}
                    onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                  author:
                  <input
                    name="author"
                    type="text"
                    value={author}
                    onChange={this.handleInputChange} />
                </label>
               
                <input type="submit" value="Submit" />
              </form>
            </div>
        );
    }

}




export default connect()(ReplyComment);