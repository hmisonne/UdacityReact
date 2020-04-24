import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DeckCard from './DeckCard'
import { getDecks } from '../utils/helpers'
import { connect } from 'react-redux'
import { receiveData } from '../actions'
import PropTypes from 'prop-types'

class HomeScreen extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    decks: PropTypes.object.isRequired,
  }
  componentDidMount() {
    const { dispatch } = this.props
    getDecks()
      .then((decks)=>{
        dispatch(receiveData(decks))
      })
    
  }



  render() {
    
    const {navigation, decks } = this.props
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

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(HomeScreen)