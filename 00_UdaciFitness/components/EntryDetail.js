import React, {Component} from 'react'
import {Text, View} from 'react-native'

class EntryDetail extends Component {
    render() {
        return (
            <View>
                <Text>Entry Detail - {JSON.stringify(this.props.route.params.entryId)}</Text>
            </View>
        )
    }
}

export default EntryDetail