import React from 'react'
import BookSection from './BookSection'

class MyReads extends React.Component {

  render() {
    const {bookshelves, bookSelection} = this.props

    return (
      {bookshelves.map(bookshelf => 
        <BookSection 
          bookshelfTitle= {bookshelf.name}
          shelves= {bookshelves}
          books = {bookSelection.filter(book => book.bookshelfID === bookshelf.id)}
          />
        )}
      <div></div>
      )
    }
  }

export default MyReads