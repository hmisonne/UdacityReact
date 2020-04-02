import React from 'react'
import BookSection from './BookSection'

class BookSelection extends React.Component {

  render() {
    const {bookshelves, bookSelection, updateBookShelfLocation} = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">  
              {bookshelves.map(bookshelf => 
                <BookSection 
                  bookshelfTitle= {bookshelf.name}
                  shelves= {bookshelves}
                  books = {bookSelection.filter(book => book.shelf === bookshelf.shelf)}
                  updateBookShelfLocation={updateBookShelfLocation}
                  />
                )}
            </div>
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
        </div>
      </div>
    )
  }
}

export default BookSelection
        