import React, { Component } from 'react';
import { connect } from 'react-redux'

class CreateEdit extends Component {
    state = {
        value: '',
    }


    handleChange = (e) => {
        const { value } = e.target
        this.setState(() => ({
            value
        }))
    }

    render() {
        const { value } = this.state
        return (
            <div>
		  		<form>
		  			<input
		  				type="text" 
		  				value={value}
		  				onChange={this.handleChange}/>
		  			<button onClick={this.handleSubmit}>Submit</button>
		  		</form>
			</div>
        );
    }

}

function mapStateToProps({posts}) {

    return {
        posts
    }
}

export default connect(mapStateToProps)(CreateEdit);