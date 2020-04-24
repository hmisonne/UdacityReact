import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import SubmitBtn from '../components/SubmitBtn'
import { lightGreen, grey } from '../utils/colors'
import { removeDeck } from '../actions'
import { deleteDeck } from '../utils/helpers'
import PropTypes from 'prop-types'


class DeckView extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired,
        deck: PropTypes.object.isRequired,
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

        if (deck !== undefined) {
            const numQuestions = deck.questions.length
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
					<SubmitBtn
						onPress={this.onDelete}
						style={{backgroundColor: 'red'}}>
						Delete
					</SubmitBtn>
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
    }

});