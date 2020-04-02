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
  	const {title, author, picture} = this.props.books
  	const {shelves} = this.props
    return (
    	<div>{picture}</div>
    	<div>{title}</div>
    	<div>{author}</div>
    	<select onChange ={this.handleShelfUpdate}>
    		{shelves.map(shelf => 
    			<option
    				name={shelf.name}
    				key={shelf.id}
    			/>
    			)}
    	</select>
      )
  }

export default Book