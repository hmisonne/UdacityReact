import React from 'react'
import Book from './Book'

const SearchBookResults = props => {

    const {books, bookshelves, updateBookShelfLocation} = props
    return (
            <div className="search-books-results">
              <ol className="books-grid">
              {books.map(book =>
                <Book 
                  book={book}
                  bookshelves={bookshelves}
                  updateBookShelfLocation={updateBookShelfLocation}
                />
                )}
              </ol>
            </div>
      )
}

export default SearchBookResults