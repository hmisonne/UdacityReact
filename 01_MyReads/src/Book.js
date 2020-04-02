import React from 'react'

class Book extends React.Component {
	state = {
		currShelf: '',
	}

	handleShelfUpdate = shelf => {
		this.setState({
			currShelf: shelf
		})
	}

  render() {
  	const {title, author, picture} = this.props.book
  	const shelves = this.props.shelves
    return (
    	<li>
	      <div className="book">
	        <div className="book-top">
	          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '' }}></div>
	          <div className="book-shelf-changer">
	            <select onChange ={this.handleShelfUpdate}>
	            	<option value="move" disabled>Move to...</option>
	            	{shelves.map(shelf => 
		    			<option
		    				value={shelf.name}
		    				key={shelf.id}
		    			>{shelf.name}</option>
		    			)}
		    		<option value="none">None</option>
	            </select>
	          </div>
	        </div>
	        <div className="book-title">{title}</div>
	        <div className="book-authors">{author}</div>
	      </div>
	    </li>
      )
    }
}

export default Book