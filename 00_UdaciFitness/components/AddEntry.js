import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform, Picker } from 'react-native'
import {
  getMetricMetaInfo,
  timeToString,
  getDailyReminderValue,

} from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import DateHeader from './DateHeader'
import { Ionicons } from "@expo/vector-icons";
import TextButton from "./TextButton";
import { submitEntry, removeEntry} from '../utils/api'
import { addEntry } from '../actions'
import { connect } from 'react-redux'
import { white, purple } from '../utils/colors'
import {CommonActions} from '@react-navigation/native';

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
    	 style={Platform.OS === "ios" ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      	onPress={onPress}>
        <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddEntry extends Component {
	state = {
		run: 0,
		bike: 0,
		swim: 0,
		sleep: 0,
		eat: 0,
	}

	reset = () => {
		const key = timeToString()
		 this.props.dispatch(addEntry({
		 	[key]: getDailyReminderValue()
		 }))
	    // Route to Home
	    this.toHome()
	    // Update "DB"
	    removeEntry(key)
	}

	increment = (metric) => {
		const {max, step} = getMetricMetaInfo(metric)
		this.setState((prevState) => {
			const count = prevState[metric] + step
			return {
				...prevState,
				[metric]: count > max ? max : count,
			}
		}
		)
	}

	decrement = (metric) => {
		const { step} = getMetricMetaInfo(metric)
		this.setState((prevState) => {
			const count = prevState[metric] - step
			return {
				...prevState,
				[metric]: count < 0 ? 0 : count,
			}
		}
		)
	}
	slide = (metric, value) => {
		this.setState(() => ({
	      [metric]: value
	    }))
	}

	submit = () => {
		const key = timeToString()
		const entry = this.state

		this.props.saveEntry(entry)
			
		this.setState(() => ({
			run: 0,
			bike: 0,
			swim: 0,
			sleep: 0,
			eat: 0,
		}))
		
		this.toHome()
		submitEntry({key, entry})
	}
	toHome = () => {
        this.props.toHome()
    }
  render() {
  	const { entryId } = this.props
  	const date = entryId.split('-')
  	console.log(date)
    const metaInfo = getMetricMetaInfo()
    const selectedValue = (new Date(date[0],date[1]-1,date[2])).toLocaleDateString()
    if (this.props.alreadyLogged) {
    	return(
    		<View style={styles.center}>
    			<Ionicons name={"ios-happy"} size={100} />
    			<Text>You already logged your information for today.</Text>
    			<TextButton 
    				style={{padding: 10}}
    				onPress={this.reset}>Reset</TextButton>
    		</View>
    		)
    }

    return (
      <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
      	<Picker.Item label={selectedValue} value={selectedValue} />
        <Picker.Item label="04/17/20" value="04/17/20" />
        <Picker.Item label="04/16/20" value="04/16/20" />
      </Picker>
      	
      	{Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key]
          const value = this.state[key]

          return (
            <View
            	style={styles.row}
            	key={key}>
            {getIcon()}
              {type === 'slider'
                ? <UdaciSlider
                    value={value}
                    onChange={(value) => this.slide(key, value)}
                    {...rest}
                  />
                : <UdaciSteppers
                    value={value}
                    onIncrement={() => this.increment(key)}
                    onDecrement={() => this.decrement(key)}
                    {...rest}
                  />}
            </View>
          )
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    )
  }
}

function mapStatetoProps(state, {route}){
	let entryId
	route.params === undefined 
	? entryId = timeToString()
	: entryId = route.params.entryId
	return {
		entryId,
		alreadyLogged: state[entryId] && typeof state[entryId].today === 'undefined'
	}
	
}


function mapDispatchToProps(dispatch, {route, navigation}) {
	let entryId
	route.params === undefined 
	? entryId = timeToString()
	: entryId = route.params.entryId
	return {
		saveEntry: (entry) => dispatch(addEntry({
			[entryId]: entry
		})),
		toHome: () => navigation.dispatch(
            CommonActions.goBack({
                key: 'AddEntry',
       	}))
	}
}

export default connect(mapStatetoProps, mapDispatchToProps)(AddEntry)


const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: white,
	},
	iosSubmitBtn: {
		backgroundColor: purple,
		padding: 10,
		borderRadius: 7,
		height: 45,
		marginLeft: 40,
		marginRight: 40,
	},
	AndroidSubmitBtn: {
		backgroundColor: purple,
		paddingRight: 30,
		height: 45,
		borderRadius: 2,
		alignSelf: "flex-end",
		justifyContent: "center",
		alignItems: "center"
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center'
	},
	row : {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
	},
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginRight: 30,
		marginLeft: 30
	}
})



