import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { purple, white } from '../utils/colors'
import MetricCard from './MetricCard'
import { addEntry } from '../actions'
import { removeEntry} from '../utils/api'
import { getDailyReminderValue, timeToString } from '../utils/helpers'
import TextButton from './TextButton'

class EntryDetail extends Component {
    setTitle = (entryId) => {
        if (!entryId) return;

        const year = entryId.slice(0, 4)
        const month = entryId.slice(5, 7)
        const day = entryId.slice(8)

        this.props.navigation.setOptions({
            title: `${month}/${day}/${year}`
        });
    };

	reset = () => {
		const { remove, goback, entryId} = this.props
		remove()
		goback()
		removeEntry(entryId)
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.metrics && !nextProps.metrics.today;
    }

    render() {
    	const {metrics} = this.props
        const {entryId} = this.props.route.params;
        this.setTitle(entryId);
        return (
            <View style={styles.container}>
            	<MetricCard metrics= {metrics}/>
            	<TextButton 
    				style={{margin: 20}}
    				onPress={this.reset}>Reset</TextButton>
            </View>
        )
    }
}

function mapStatetoProps(state, {route}) {
	const {entryId} = route.params
	return {
		entryId,
		metrics: state[entryId]
	}

}

function mapDispatchToProps(dispatch, {route, navigation}) {
	const {entryId} = route.params
	return {
		remove: () => dispatch(addEntry({
			[entryId]: timeToString() === entryId
			? getDailyReminderValue()
			: null
		})),
		goback: () => navigation.goBack()
				 
	}
}

export default connect(mapStatetoProps, mapDispatchToProps)(EntryDetail)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
  },
})