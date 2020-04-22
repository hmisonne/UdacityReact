import React, {Component} from 'react'
import { View, StyleSheet, Text, TextInput, Button, AsyncStorage } from 'react-native'
import { addDeckContainer, getDecks, getDeck } from '../utils/helpers'

export default class NewDeck extends Component{
  state = {
    value: '',
  }
  onChangeText = (value) => {
    this.setState(()=> ({
      value
    }))
  }

  saveData = () => {
    let title = this.state.value;
    addDeckContainer(title)
    alert('Saved')
  }

  displayData = () => {
    getDecks()
      .then((result) => {
        alert(result)
    })
  }
  displayKey = () => {
    getDeck('T')
      .then((result) => {
        alert(result)
    })
  }

  
  render(){
    const { value } = this.state
    return(
      <View>
        <Text>Deck title</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.onChangeText(text)}
            value={value}
          />
          <Button title= 'saveData'
            onPress = {this.saveData}/>
            <Text>b</Text>
           <Button title= 'displayData'
            onPress = {this.displayData}/>
            <Text>b</Text>
           <Button title= 'displayKey'
            onPress = {this.displayKey}/>
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
