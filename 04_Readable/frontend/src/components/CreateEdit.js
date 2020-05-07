import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleAddPost, handleUpdatePost } from '../actions/posts'
import { generateUID } from '../utils/helpers'

class CreateEdit extends Component {
    state = {
        currPost: {
            title: '',
            body: '',
            author: '',
            category: 'react'
        },
        categories: []
    }

    componentDidMount() {
        if (this.props.post) {
            this.setState(() => ({
                currPost: this.props.post
            }))

        }
        fetch(`http://127.0.0.1:3001/categories`, { headers: { 'Authorization': 'mySecretToken' } })
            .then(res => res.json())
            .then(response => this.setState({ categories: response.categories }))

    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState((currState) => ({
            ...currState,
            currPost: {
                ...currState.currPost,
                [name]: value
            }
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { body, category, title, author } = this.state.currPost
        const { dispatch, history } = this.props
        let new_post = {
            title,
            body,
            author,
            category,
        }
        if (this.props.post) {
            new_post.id = this.props.post.id
            new_post.timestamp = this.props.post.timestamp
            dispatch(handleUpdatePost(new_post))
        } else {
            new_post.id = generateUID()
            new_post.timestamp = Date.now()
            dispatch(handleAddPost(new_post))
        }
        history.push('/')

    }

    render() {
        const { body, category, title, author } = this.state.currPost
        const { categories } = this.state
        return (
            <div>

            <form onSubmit={this.handleSubmit}>
                <label>
                  Title:
                  <input
                    name="title"
                    type="text"
                    value={title}
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
                  {categories.map(category=> 
                    <option
                        key = {category.name} 
                        value={category.name}>{category.name}</option>
                    )}
                  </select>
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
        );
    }

}


function mapStateToProps({ posts }, props) {
    const { id } = props.match.params
    let postDetail = {}
    if (posts.length !== 0) {
        postDetail = posts.filter(post => post.id === id)[0]
    }
    return {
        post: postDetail
    }
}

export default connect(mapStateToProps)(CreateEdit);