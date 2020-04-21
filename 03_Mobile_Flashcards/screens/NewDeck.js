import React, {Component} from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

export default class NewDeck extends Component{
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
        <Text>Deck title</Text>
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});
