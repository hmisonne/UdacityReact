import React from 'react'
import Book from './Book'

const BookSection = props => {
  	const {bookshelfTitle, books, bookshelves, updateBookShelfLocation} = props
    return (
    	<div>
	    	<h2 className="bookshelf-title">{bookshelfTitle}</h2>
		    <div className="bookshelf-books">
	  			<ol className="books-grid">  
			      {books.map(book => 
			      	<Book 
			      		book={book}
			      		key={book.id}
			      		bookshelves={bookshelves}
			      		updateBookShelfLocation={updateBookShelfLocation}
			      	/>
			      	)}
			    </ol>
			</div>
		</div>
	)
}

export default BookSection