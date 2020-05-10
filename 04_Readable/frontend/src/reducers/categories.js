import {
    RECEIVE_DATA,
} from '../constants/ActionTypes'

export default function categories(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.categories
        default:
            return state
    }
}