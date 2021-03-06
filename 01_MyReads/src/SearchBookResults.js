import React from 'react'
import Book from './Book'

const SearchBookResults = props => {

    const {books, bookshelves, updateBookShelfLocation, BookIDtoShelf} = props
    if (books.length === 0){
      return (
            <div className="search-books-results">
                    Books not found
            </div>
        )
    }
    return (
            <div className="search-books-results">
              <ol className="books-grid">
              {books.map(book =>
                <Book 
                  book={book}
                  key={book.id}
                  bookshelves={bookshelves}
                  updateBookShelfLocation={updateBookShelfLocation}
                  BookIDtoShelf={BookIDtoShelf}
                />
                )}
              </ol>
            </div>
      )
}

export default SearchBookResults