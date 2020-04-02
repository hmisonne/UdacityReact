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
          <SearchBooks 
            bookshelves={bookshelves}
            books = {this.state.books}
            updateBookShelfLocation={this.updateBookShelfLocation}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp


        