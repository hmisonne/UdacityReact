import React, {Component} from 'react'
import { View, StyleSheet, Text, TextInput, Button, AsyncStorage } from 'react-native'
// import { saveDeckTitle, getDeck } from '../utils/helpers'

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
    let deckName = this.state.value;
    let deckData = {
        title: deckName,
        questions: []
    }
    AsyncStorage.setItem(deckName, 
      JSON.stringify(deckData));
    alert('Saved')
  }

  displayData = async () => {
    let decks = []
    try {
        decks = await AsyncStorage.getAllKeys()
    }
    catch(e) {
      alert('error',e)
    }
    alert(decks)
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
