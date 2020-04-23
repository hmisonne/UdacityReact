import React, { Component } from 'react'

import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'

class DeckCard extends Component{
	state ={
		fadeValue: new Animated.Value(0),
		SlideInLeft: new Animated.Value(0)
	}

	startAnimation = () => {
		Animated.timing(this.state.SlideInLeft, {
			toValue: 1,
			duration: 200
		}).start()
	}

	navigateToDeckView = () => {
		const { navigation, deck } = this.props
		this.startAnimation()
		navigation.navigate('DeckView', {deck})
	}

	render(){
		const { navigation, deck } = this.props
		let { SlideInLeft, fadeValue } = this.state;
		return(
			 <View style={styles.container}>

			<TouchableOpacity 
				style={styles.row}
				onPress={this.navigateToDeckView}>
						<Animated.View 
			 style={{
            transform: [
              {
                translateY: SlideInLeft.interpolate({
                  inputRange: [0, 1],
                  outputRange: [600, 0]
                })
              }
            ],
            backgroundColor: "#347a2a",
            justifyContent: "center"
          }}
        >
			<Text style={styles.text}>{deck.title}</Text>
			<Text style={styles.text}>{deck.questions.length} cards</Text>
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
  	borderColor: 'blue',
    borderWidth: 3,
    marginTop: 3,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
});
		// <Animated.View 
		// 	style={{
		// 		opacity: this.state.fadeValue,
		// 		height: 25,

		// 		backgroundColor: "#347a2a"
		// 	}}>