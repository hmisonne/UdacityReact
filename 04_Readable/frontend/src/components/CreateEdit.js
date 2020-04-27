import React, { Component } from 'react';

class CreateEdit extends Component {
  state = {
  	value: '',
  }

  handleChange = (e) => {
  	const {value} = e.target
  	this.setState(()=>({
  		value
  	}))
  }

  render() {
  	const {value} = this.state
  	return (
  	<div>
  		<form>
  			<input
  				type="text" 
  				value={value}
  				onChange={this.handleChange}/>
  			<button>Submit</button>
  		</form>
	</div>
  );
  }
  
}

export default CreateEdit;
