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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books:[]
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
  }

  updateBookShelfLocation = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((bookIDperShelf) => 
        this.loadBooks())
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=> (
          <BookSelection
            bookshelves={bookshelves}
            bookSelection={this.state.books}
            updateBookShelfLocation={this.updateBookShelfLocation}
          />
          )} />
        <Route path='/search' render={() => (
          <SearchBooks />
          )}/>
      </div>
    )
  }
}

export default BooksApp


        