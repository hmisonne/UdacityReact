import decks from './index'

let deckSample = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

let question = {
    question: 'New Question?',
    answer: 'New Answer.'
}

let newDeck = { Python: {
    title: 'Python',
    questions: []
}}

describe('decks reducer', () => {
	it('should handle initial state', () => {
		expect(
			decks(undefined, {})
		).toEqual({})
	})

	it('should handle RECEIVE_DATA', () => {
		expect(
			decks({}, {
				type: 'RECEIVE_DATA',
				decks: deckSample
			})
			).toEqual(deckSample)
	})

	it('should handle ADD_QUESTION', () => {
		expect(
			decks(deckSample, {
				type: 'ADD_QUESTION',
				question: question,
				deck: "JavaScript"
			})
			).toEqual({
			  React: {
			    title: 'React',
			    questions: [
			      {
			        question: 'What is React?',
			        answer: 'A library for managing user interfaces'
			      },
			      {
			        question: 'Where do you make Ajax requests in React?',
			        answer: 'The componentDidMount lifecycle event'
			      }
			    ]
			  },
			  JavaScript: {
			    title: 'JavaScript',
			    questions: [
			      {
			        question: 'What is a closure?',
			        answer: 'The combination of a function and the lexical environment within which that function was declared.'
			      },
			      {
				    question: 'New Question?',
				    answer: 'New Answer.'
				}
			    ]
			  }
			})
	})
	it('should handle ADD_DECK', () => {
		expect(
			decks(newDeck, {
				type: 'ADD_DECK',
				newDeck
			})
			).toEqual(newDeck)
	})
})
