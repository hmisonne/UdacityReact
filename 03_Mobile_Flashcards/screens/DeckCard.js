import React, { Component } from 'react'

import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'
import { blue } from '../utils/colors'
import { Divider } from 'react-native-elements';
import PropTypes from 'prop-types'


class DeckCard extends Component {
    static propTypes = {
        navigation: PropTypes.object.isRequired,
        deck: PropTypes.object.isRequired,
    }
    state = {
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
        navigation.navigate('DeckView', { deckId: deck.title })
    }

    render() {
        const { deck } = this.props
        let { scaleValue } = this.state;
        return (
            <View style={styles.container}>

			<TouchableOpacity 
				style={styles.row}
				onPress={this.navigateToDeckView}>
						<Animated.View 
			 style={{
            transform: [
              { scale: scaleValue.interpolate({
			      inputRange: [0, 0.5, 1],
			      outputRange: [1, 0.5, 1]
			    }) }
            ],
          }}
        >
			<Text style={styles.cardTitle}>{deck.title}</Text>
			<Text style={styles.cardQuestion}>{deck.questions.length} cards</Text>
		</Animated.View>
			</TouchableOpacity>
			<Divider style={{ backgroundColor: 'black', height: 2 }} />
		</View>
        )
    }


}

export default DeckCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        padding: 10,
        marginTop: 10,
    },
    cardTitle: {
        color: blue,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    cardQuestion: {
        fontSize: 15,
        textAlign: "center"
    }
});