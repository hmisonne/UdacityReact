import * as actions from './index'

let decks = {
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
    question: 'What is a closure?',
    answer: 'The combination of a function and the lexical environment within which that function was declared.'
}

let newDeck = { Python: {
    title: 'Python',
    questions: []
}}


describe('question actions', () => {
	it('receiveData should create RECEIVE_DATA action', () => {
		expect(actions.receiveData(decks)).toEqual({
			type: 'RECEIVE_DATA',
			decks
		})
	})
	it('addQuestion should create ADD_QUESTION action', ()=>{
		expect(actions.addQuestion("JavaScript",question)).toEqual({
			type: 'ADD_QUESTION',
			question,
			deck: "JavaScript"
		})
	})
	it('answerQuestion should create ADD_DECK action', ()=>{
		expect(actions.addDeck(newDeck)).toEqual({
			type: 'ADD_DECK',
			newDeck
		})
	})
	it('removeDeck should create REMOVE_DECK action', ()=>{
		expect(actions.removeDeck("JavaScript")).toEqual({
			type: 'REMOVE_DECK',
			id: "JavaScript"
		})
	})
})


