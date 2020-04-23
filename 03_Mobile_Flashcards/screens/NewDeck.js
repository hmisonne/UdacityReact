import React, {Component} from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import { addDeckContainer } from '../utils/helpers'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { lightGreen, grey } from '../utils/colors'
import SubmitBtn from '../components/SubmitBtn'

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
        this.toIndividualDeck(title)
      })
    
  }

  toIndividualDeck = (title) => {
    const { navigation } = this.props
    navigation.navigate('DeckView',{deckId: title})
  }

  render(){
    const { value } = this.state
    return(
      <View style={styles.container}>
        <TextInput
            style={styles.textInput}
            onChangeText={text => this.onChangeText(text)}
            value={value}
            placeholder='Enter title'
          />
          <SubmitBtn
            onPress = {this.saveData}>SUBMIT</SubmitBtn>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent: "space-around",
  },
  textInput :{
    height: 40, 
    borderColor: grey, 
    borderWidth: 2,
    borderRadius:10,
    marginTop:10,

    marginLeft:30,
    marginRight:30,
  },
  btn : {
    backgroundColor:lightGreen,
    borderRadius:10,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
  },
   TextStyle:{
      paddingTop:15,
      paddingBottom:15,
  },
  btnText: {
    color:'#fff',
    textAlign:'center',
  }
});

export default connect()(NewDeck)