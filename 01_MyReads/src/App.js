import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSelection from './BookSelection'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

const bookshelves = [
  {
    id: 1,
    name:"currentlyReading",
    formatedName:'Currently Reading'
  },
  {
    id: 2,
    name:"wantToRead",
    formatedName:'Want to Read'
  },
  {
    id:3,
    name:"read",
    formatedName:'Read'
  }]


class BooksApp extends React.Component {
  state = {
    books:[],
    BookIDtoShelf:{}
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((currState)=> ({
          books
        }))
      })
      .then(() =>
        this.loadShelves()
        )
  }

  loadShelves = () => {
      this.state.books.map(book => this.updateBookIDtoShelf(book))
    }

  updateBookIDtoShelf = (book) => {
      this.setState(prevState => ({
        BookIDtoShelf: {...prevState.BookIDtoShelf,
          [book.id]: book.shelf}
      }))
  }

  updateBookShelfLocation = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((bookIDperShelf) => 
        this.loadBooks());
    this.updateBookIDtoShelf(book)
  }


  render() {
    const {books, BookIDtoShelf} = this.state
    console.log('BookIDtoShelf App state',BookIDtoShelf)
    return (
      <div className="app">
        <Route exact path='/' render={()=> (
          <BookSelection
            bookshelves={bookshelves}
            bookSelection={books}
            updateBookShelfLocation={this.updateBookShelfLocation}
            BookIDtoShelf={BookIDtoShelf}
          />
          )} />
        <Route path='/search' render={() => (
          <SearchBooks 
            bookshelves={bookshelves}
            updateBookShelfLocation={this.updateBookShelfLocation}
            BookIDtoShelf={BookIDtoShelf}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp


        