import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddPost } from '../actions/posts'
import { generateUID } from '../utils/helpers'

class CreateEdit extends Component {
    state = {
        title: '',
        body: '',
        author: '',
        category: 'react'
    }


    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState(() => ({
            [name]:value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { body, category, title, author} = this.state
        const new_post = {
            id: generateUID(),
            timestamp: Date.now(),
            title,
            body,
            author,
            category,
        }
        this.props.dispatch(handleAddPost(new_post))
    }

    render() {
        const { body, category, title, author } = this.state
        return (
            <div>

            <form onSubmit={this.handleSubmit}>
                <label>
                  Title:
                  <input
                    name="title"
                    type="text"
                    checked={title}
                    onChange={this.handleInputChange} />
                </label>
                <br />
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
                <label>
                  Category:
                  <select name="category" value={category} onChange={this.handleInputChange}>
                    <option value="react">React</option>
                    <option value="redux">Redux</option>
                    <option value="udacity">Udacity</option>
                  </select>
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
        );
    }

}



export default connect()(CreateEdit);