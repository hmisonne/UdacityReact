import React from 'react'

class Book extends React.Component {


	handleShelfUpdate = (e) => {
		this.props.updateBookShelfLocation(this.props.book, e.target.value)
	}

  render() {
  	const {title, authors, imageLinks} = this.props.book
  	const {bookshelves} = this.props
  	let imageURL = ''
  	imageLinks !== undefined && (imageURL = imageLinks.smallThumbnail)

    return (
    	<li>
	      <div className="book">
	        <div className="book-top">
	          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageURL})` }}></div>
	          <div className="book-shelf-changer">
	            <select 
	            	onChange ={this.handleShelfUpdate}
	            	defaultValue = {this.props.book.shelf}>
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