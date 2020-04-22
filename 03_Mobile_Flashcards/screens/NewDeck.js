import React, {Component} from 'react'
import { View, StyleSheet, Text, TextInput, Button, AsyncStorage } from 'react-native'
import { addDeckContainer } from '../utils/helpers'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

class NewDeck extends Component{
  state = {
    value: '',
  }
  onChangeText = (value) => {
    this.setState(()=> ({
      value
    }))
  }

  saveData = () => {
    const { dispatch } =this.props
    let title = this.state.value;
    addDeckContainer(title)
      .then((newDeck)=> {
        dispatch(addDeck(newDeck))
      })
  }

  
  render(){
    const { value } = this.state
    return(
      <View>
        <Text>New Deck</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => this.onChangeText(text)}
            value={value}
          />
          <Button title= 'Submit'
            onPress = {this.saveData}/>
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

export default connect()(NewDeck)