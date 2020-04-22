import { applyMiddleware } from 'redux'

const logger = (store) => (next) => (action) => {
	console.group(action.type)
		console.log('The action: ', action)
		const returnValue = next(action)
		console.log('The new state: ', store.getState())
	console.groupEnd()
	return returnValue
}

export default applyMiddleware(logger)

// import logger from './logger'


// import thunk from 'redux-thunk'
// import { applyMiddleware } from 'redux'

// export default applyMiddleware(
// 	thunk,
// 	logger
// 	)