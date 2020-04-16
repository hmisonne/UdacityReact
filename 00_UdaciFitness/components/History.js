import React, {Component} from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import { timeToString, getDailyReminderValue } from '../utils/helpers'
import { fetchCalendarResults } from '../utils/api'
import { receiveEntries, addEntry } from '../actions'

class History extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    fetchCalendarResults()
      .then((entries)=>
        dispatch(receiveEntries(entries)))
      .then(({entries}) => {
        if (!entries[timeToString()]){
          dispatch(addEntry({
            [timeToString()]: getDailyReminderValue()
          }))
        }
      })
    }
    
  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props)}</Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  reset: {
    
  }
}) 

function mapStateToProps (entries) {
  return {
    entries
  }
}

export default connect(mapStateToProps)(History)