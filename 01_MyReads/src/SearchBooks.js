import React from 'react'
import { Link } from 'react-router-dom'
import SearchBookResults from './SearchBookResults'

class SearchBooks extends React.Component {
	state = {
		query: ''
	}

	updateQuery = (event) => {
		const query = event.target.value
		this.setState(() => ({
			query: query.trim()
		}))
	}

	render() {
		const {books} = this.props
		const {query} = this.state
		
		return (
		  <div className="search-books">
		        <div className="search-books-bar">
		            <Link to='/'>
		              <button className="close-search">Close</button>
		             </Link>
		          <div className="search-books-input-wrapper">
		            {/*
		              NOTES: The search from BooksAPI is limited to a particular set of search terms.
		              You can find these search terms here:
		              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

		              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
		              you don't find a specific author or title. Every search is limited by search terms.
		            */}
		            <input 
		            	type="text" 
		            	placeholder="Search by title or author"
		            	value={query}
		            	onChange={this.updateQuery}
		            	/>

		          </div>
		        </div>
		        <SearchBookResults/>
		      </div>
		  )
	}
}

export default SearchBooks