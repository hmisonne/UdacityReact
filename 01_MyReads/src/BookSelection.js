import React from 'react'
import BookSection from './BookSection'
import { Link } from 'react-router-dom'

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
                  bookshelfTitle= {bookshelf.formatedName}
                  bookshelves= {bookshelves}
                  books = {bookSelection.filter(book => book.shelf === bookshelf.name)}
                  updateBookShelfLocation={updateBookShelfLocation}
                  />
                )}
            </div>
          </div>
        </div>
        <div className="open-search">
          
          <Link to='/search'>
            <button>Search Book</button>
          </Link>
          
        </div>
      </div>
    )
  }
}

export default BookSelection
        