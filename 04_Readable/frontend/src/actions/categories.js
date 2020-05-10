import {
    RECEIVE_DATA
} from '../constants/ActionTypes'

export function receiveCategories(categories) {
    return {
        type: RECEIVE_DATA,
        categories
    }
}
