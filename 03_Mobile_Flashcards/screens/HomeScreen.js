import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DeckCard from './DeckCard'
import decks from '../utils/_DATA'

export default class HomeScreen extends Component {

  // componentDidMount() {
  //   this.displayData().then((deckList)=>{
  //     console.log('dk',deckList)
  //   })
  // }

  // displayData = async () => {
  //   let deckList = []
  //   try {
  //       deckList = await AsyncStorage.getAllKeys()
  //   }
  //   catch(e) {
  //     alert('error',e)
  //   }
  //   return(deckList)
  //   }


  render() {
    const {navigation } = this.props
      console.log(decks)
    return (
      <ScrollView style={styles.container}>
      {Object.keys(decks).map(id => 
        <DeckCard 
            key={id} 
            deck={decks[id]}
            navigation={navigation}/>
      )
       
      }

      </ScrollView>
    );
  }
 
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


