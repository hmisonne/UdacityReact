import React, {Component} from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

export default class NewQuestion extends Component{
	state = {
		value: ''
	}
	onChangeText = (value) => {
		this.setState(()=> ({
			value
		}))
	}
	render(){
		const { value } = this.state
		return(
			<View>
				<Text>Question</Text>
				<TextInput
			      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
			      onChangeText={text => onChangeText(text)}
			      value={value}
			    />
			    <Button title= 'Submit'/>
			</View>
		)
	}
}
