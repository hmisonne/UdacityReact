import React from 'react'
import { Link } from 'react-router-dom'
import SearchBookResults from './SearchBookResults'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
	state = {
		query: '',
		books:[]
	}

	updateQuery = (event) => {
		const query = event.target.value
		this.setState(() => ({
			query: query.trim()
		}))
		if (query.length>2){
			this.searchBooks(query)
		}
	}

	searchBooks = (query) => {
	    BooksAPI.search(query)
	      .then((books) => {
	      	if (books.error){
				books = []
	      	}
	      	this.setState(()=>({
	      		books
	      	}))
	      }

	    ).catch((error) => {
			console.log(error)
	    }
		)
	}

	render() {
		const {updateBookShelfLocation, bookshelves} = this.props
		const {books, query} = this.state
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
		        <SearchBookResults
		        	books = {books}
		        	bookshelves ={bookshelves}
		        	updateBookShelfLocation = {updateBookShelfLocation}
		        />
		      </div>
		  )
	}
}

export default SearchBooks