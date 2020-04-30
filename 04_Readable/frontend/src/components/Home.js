import React, { Component } from 'react';
import IndividualPost from './IndividualPost'
import CategoryList from './CategoryList'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleFilterByCat } from '../actions/posts'
import { handleInitialData } from '../actions/shared'

class Home extends Component {
	state = {
		categories: [],
		sortByRecentDate: true,
		sortByVote: false,

	}
	componentDidMount () {
		fetch(`http://127.0.0.1:3001/categories`, { headers: { 'Authorization': 'mySecretToken' } })
            .then(res => res.json())
            .then(response => this.setState({categories: response.categories}))
	}
	handleFilterCat = (e) => {
		e.preventDefault()
		const { name } = e.target
		const { dispatch } = this.props
		name === 'reset'
		? dispatch(handleInitialData())
		: dispatch(handleFilterByCat(name))
	}

	handleSort = (e) => {
		e.preventDefault()
		const {name} = e.target
		this.setState((prevState)=> ({
			[name]: !prevState[name],
		}))
		}

    render() {
    	const { categories, sortByRecentDate, sortByVote } = this.state
        const { posts } = this.props

        sortByRecentDate
        ? posts.sort((a,b) => a.timestamp - b.timestamp)
        : posts.sort((a,b) => b.timestamp - a.timestamp)

        sortByVote && posts.sort((a,b) => a.voteScore - b.voteScore)

        return (
            <div>
		  	<button 
		  		onClick={this.handleSort}
		  		name='sortByRecentDate'>Sort By Date</button>
			<button
				onClick={this.handleSort}
		  		name='sortByVote'>Sort By Vote</button>  	
			  	<div>
				    <div>
				      Category
				    </div>

				    <ul>
				    	<button 
							key = 'reset'
							name = 'reset'
							onClick = {this.handleFilterCat}> All</button>	
				    	{ categories.map(category =>
							<button 
								key = {category.name}
								name = {category.path}
								onClick = {this.handleFilterCat}> {category.name}</button>	
				    		)
				    	
				    	}
				    	
				    </ul>
				</div>

				<div>
				    <div>
				      Post
				    </div>
				    <ul>
				    	{ posts.map((post) =>
				    		<li>
							< IndividualPost
								key={post.id}
								id={post.id}
								postDetail={post}/>
							</li>
				    		)
				    	
				    	}
				    	
				    </ul>
				</div>	
			</div>
        );
    }

}

function mapStateToProps({posts}) {

    return {
        posts
    }
}

export default withRouter(connect(mapStateToProps)(Home));