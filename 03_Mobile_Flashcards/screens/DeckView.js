import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import SubmitBtn from '../components/SubmitBtn'

import { removeDeck } from '../actions'
import { deleteDeck } from '../utils/helpers'
import PropTypes from 'prop-types'


class DeckView extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired,
        deck: PropTypes.object,
    }
    navigateToNewQuestion = () => {
        const { deck, navigation } = this.props
        navigation.navigate('NewQuestion', { deckId: deck.title })
    }
    navigateToQuizz = () => {
        const { deck, navigation } = this.props
        navigation.navigate('Quizz', { deck })
    }
    onDelete = () => {
        const { deck, dispatch, navigation } = this.props
        deleteDeck(deck.title)
            .then(() => {
                dispatch(removeDeck(deck.title))
                navigation.navigate('Root')
            })
    }

    render() {
        const { deck, navigation } = this.props
        let deckTitle = ''
        let numQuestions = 0
        // To prevent the code from crashing when a deck is deleted
        if (deck !== undefined) {
            numQuestions = deck.questions.length
            deckTitle = deck.title
        }

        return (
            <View style={styles.container}>
				<View>
					<Text style={styles.textTitle}>{deckTitle}</Text>
					<Text style={styles.textSmall}>{numQuestions} cards</Text>
				</View>
				<View>
					<SubmitBtn
						onPress={this.navigateToNewQuestion}>
						Add Card
					</SubmitBtn>
					<SubmitBtn
						onPress={this.navigateToQuizz}>
						Start Quiz
					</SubmitBtn>
                </View>
                <View>
			        <TouchableOpacity
                        onPress = {this.onDelete}
                        >
                        <Text style={styles.textDelete}>Delete</Text>
                    </TouchableOpacity>
                </View>
				
			</View>
        )
    }

}

function mapStateToProps(state, { route }) {
    const { deckId } = route.params
    return {
        deck: state[deckId]
    }
}
export default connect(mapStateToProps)(DeckView)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 30
    },
    textSmall: {
        textAlign: 'center',
        fontSize: 20
    },
    textDelete: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20
    }

});