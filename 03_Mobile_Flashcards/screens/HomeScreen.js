import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DeckCard from './DeckCard'
import decks from '../utils/_DATA'
import { saveDeckTitle, getDecks, getDeck } from '../utils/helpers'

export default class HomeScreen extends Component {

  componentDidMount() {
    getDecks()
      .then((deckList)=>{
      console.log('dk',deckList)
    })
  }



  render() {
    
    const {navigation} = this.props
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
