import {RECEIVE_ENTRIES, ADD_ENTRY} from '../actions/index'
import _ from 'lodash';

function entries(state={}, action){
	switch (action.type) {
		case RECEIVE_ENTRIES:
			return {
				...state,
				...action.entries
			}
		case ADD_ENTRY:
			return {
				...state,
				...action.entry
			}
		default:
			return state
	}
}

export default entries