import React, { Component } from 'react'

import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'
import { lightGreen, grey } from '../utils/colors'

class DeckCard extends Component{
	state ={
		scaleValue: new Animated.Value(0)
	}

	startAnimation = () => {
		Animated.timing(this.state.scaleValue, {
			toValue: 1,
			duration: 250
		}).start()
	}

	navigateToDeckView = () => {
		const { navigation, deck } = this.props
		this.startAnimation()
		navigation.navigate('DeckView', {deckId: deck.title})
	}

	render(){
		const { deck } = this.props
		let { scaleValue } = this.state;
		return(
			 <View style={styles.container}>

			<TouchableOpacity 
				style={styles.row}
				onPress={this.navigateToDeckView}>
						<Animated.View 
			 style={{
            transform: [
              { scale: scaleValue.interpolate({
			      inputRange: [0, 0.5, 1],
			      outputRange: [1, 0.5, 2]
			    }) }
            ],
          }}
        >
			<Text style={styles.cardTitle}>{deck.title}</Text>
			<Text style={styles.cardQuestion}>{deck.questions.length} cards</Text>
		</Animated.View>
				
			</TouchableOpacity>
		</View>
		)
	}
	

}

export default DeckCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  row: {
  	// borderColor: 'blue',
   //  borderWidth: 3,
   	padding: 10,
    marginTop: 10,
    backgroundColor: lightGreen
  },
  cardTitle: {
  	color: grey,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  cardQuestion: {
  	fontSize: 15,
  	textAlign: "center"
  }
});