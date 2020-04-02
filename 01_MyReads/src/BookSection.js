import React from 'react'
import Book from './Book'

const BookSection = props => {
  	const {bookshelfTitle, books, shelves} = props
    return (
      <div>{bookshelfTitle}</div>
      {books.map(book => 
      	<Book 
      		book={book}
      		shelves={shelves}
      		/>
      	)}
      )
  }

export default BookSection