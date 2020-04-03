import React from 'react'
import { Link } from 'react-router-dom'

class Book extends React.Component {

	handleShelfUpdate = (e) => {
		this.props.updateBookShelfLocation(this.props.book, e.target.value);
	}

  render() {
  	const {title, authors, imageLinks} = this.props.book
  	const {bookshelves, BookIDtoShelf} = this.props

  	let imageURL = ''
  	imageLinks !== undefined && (imageURL = imageLinks.smallThumbnail)
  	
  	let currShelf = 'none'
  	BookIDtoShelf[this.props.book.id] !== undefined && (currShelf = BookIDtoShelf[this.props.book.id])

    return (
    	<li>
	      <div className="book">
	        <div className="book-top">
	            <Link to='/bookdetails'>
	          		<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})` }}></div>
	          	 </Link>
	          <div className="book-shelf-changer">
	             <select 
	            	onChange ={this.handleShelfUpdate}
	            	value = {currShelf}>
	            	<option value="move" disabled>Move to...</option>
	            	{bookshelves.map(shelf => 
		    			<option
		    				value={shelf.name}
		    				key={shelf.id}
		    			>{shelf.formatedName}</option>
		    			)}
		    		<option value="none">None</option>
	            </select>
	          </div>
	        </div>
	        <div className="book-title">{title}</div>
	        <div className="book-authors">{authors}</div>
	      </div>

	    </li>

      )
    }
}

export default Book
