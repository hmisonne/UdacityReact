import React from 'react'
import Book from './Book'

const BookSection = props => {
  	const {bookshelfTitle, books, shelves} = props
    return (
    	<div>
	    	<h2 className="bookshelf-title">{bookshelfTitle}</h2>
		    <div className="bookshelf-books">
	  			<ol className="books-grid">  
			      {books.map(book => 
			      	<Book 
			      		book={book}
			      		shelves={shelves}
			      	/>
			      	)}
			    </ol>
			</div>
		</div>
	)
}

export default BookSection