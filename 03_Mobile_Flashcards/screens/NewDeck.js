import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import { addDeckContainer } from '../utils/helpers'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { lightGreen, grey } from '../utils/colors'
import SubmitBtn from '../components/SubmitBtn'
import StyledTextInput from '../components/StyledTextInput'
import PropTypes from 'prop-types'

class NewDeck extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired,
    }
    state = {
        value: '',
    }
    onChangeText = (value) => {
        this.setState(() => ({
            value
        }))
    }

    saveData = () => {
        const { dispatch } = this.props
        let title = this.state.value;
        addDeckContainer(title)
            .then((newDeck) => {
                dispatch(addDeck(newDeck))
                this.toIndividualDeck(title)
            })

    }

    toIndividualDeck = (title) => {
        const { navigation } = this.props
        navigation.navigate('DeckView', { deckId: title })
    }

    render() {
        const { value } = this.state
        return (
            <View style={styles.container}>
        <StyledTextInput 
          value={value} 
          placeholder='Enter title'
          onChangeText={text => this.onChangeText(text)} />
        
          <SubmitBtn
            onPress = {this.saveData}
            disabled={value===""}>SUBMIT</SubmitBtn>
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
});

export default connect()(NewDeck)