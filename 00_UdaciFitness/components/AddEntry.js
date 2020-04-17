import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
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
		const key = this.props.entryId
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
		const key = this.props.entryId
		const entry = this.state

		this.props.dispatch(addEntry({
			[key]: entry
		}))
			
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
        this.props.navigation.dispatch(
            CommonActions.goBack({
                key: 'AddEntry',
            }))
    }
  render() {
    const metaInfo = getMetricMetaInfo()
    
    return (
      <View style={styles.container}>
      	<DateHeader date={(new Date()).toLocaleDateString()}/>
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


function mapStatetoProps(dispatch, {route, navigation}) {
	const {entryId} = route.params

	return {
		entryId,
	}

}

export default connect(mapStatetoProps)(AddEntry)

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


// if (this.props.alreadyLogged) {
//     	return(
//     		<View style={styles.center}>
//     			<Ionicons name={"ios-happy"} size={100} />
//     			<Text>You already logged your information for today.</Text>
//     			<TextButton 
//     				style={{padding: 10}}
//     				onPress={this.reset}>Reset</TextButton>
//     		</View>
//     		)
//     }

// mapStatetoProps
// 		alreadyLogged: state[entryId] && typeof state[entryId].today === 'undefined'
