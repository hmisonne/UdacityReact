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
    handleBodyChange = (e) => {
        const body = e.target.value
        this.setState((currState) => ({
            ...currState,
            currPost: {
                ...currState.currPost,
                body
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
            console.log('new post', new_post)
            dispatch(handleAddPost(new_post))
        }
        history.push('/')

    }

    render() {
        const { body, category, title, author } = this.state.currPost
        const { categories } = this.state
        return (
            <div>

            <form className='new-post' onSubmit={this.handleSubmit}>

                  <input
                    name="title"
                    placeholder="Title"
                    type="text"
                    className='inputarea'
                    value={title}
                    onChange={this.handleInputChange} />
                <br />

                  <textarea
                    className='textarea'
                    placeholder="Post content..."
                    value={body}
                    onChange={this.handleBodyChange}
                    maxLength={280}/>
                <br />
                  <input
                    className='inputarea'
                    name="author"
                    placeholder="Author"
                    type="text"
                    value={author}
                    onChange={this.handleInputChange} />

                <br />
                  <select 
                  name="category" value={category} onChange={this.handleInputChange}>
                      <option disabled>Select Category</option>
                  {categories.map(category=> 
                    <option
                        key = {category.name} 
                        value={category.name}>{category.name}</option>
                    )}
                  </select>
                <br />
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