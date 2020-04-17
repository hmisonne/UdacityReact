import React from 'react';
import QuestionDetailsPoll from '../components/QuestionDetailsPoll';
import {shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

function submitAnswerSample() {
  return true
}  

const questionSample = {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
 }

function setup() {
  const actions = {
    handleVote: jest.fn(),
    handleOptionChange: jest.fn()
  }
  const component = shallow(
    <QuestionDetailsPoll
        question={questionSample} 
        submitAnswer={submitAnswerSample}
        {...actions}/>
    )

  return {
    component: component,
    actions: actions,
    optionOne: component.find('input[value="optionOne"]'),
    optionTwo: component.find('input[value="optionTwo"]'),
    button: component.find('button')
  }
}

describe('QuestionDetailsPoll component', () => {
  it('should have first option selected by default', () => {
    const {optionTwo, optionOne} = setup()

    expect((optionTwo).prop('checked')).toBe(false)
    expect((optionOne).prop('checked')).toBe(true)
    // optionTwo.simulate('change', { target: { checked: true } })
    // expect((optionTwo).prop('checked')).toBe(true)
    // expect(actions.handleOptionChange).toBeCalled()
  })
  // it('should submit vote when button is pressed', () => {
  //   const {button, actions} = setup()
  //   button.at(0).simulate('click')
  //   expect(actions.handleVote).toBeCalled()
  // })
})




// it('should render correctly ', () => {
//   const component = shallow(<QuestionDetailsPoll
//     question={questionSample} 
//         submitAnswer={submitAnswerSample}/>);
  
//   expect(component).toMatchSnapshot();
// });

// test('Options displayed correctly', () => {
//   // Render a text correctly
//   const radioInput = 
//   		shallow(<QuestionDetailsPoll 
//   			question={questionSample} 
//   			submitAnswer={submitAnswerSample}/>);

//   expect(radioInput.text()).toEqual('have horrible short term memoryhave horrible long term memoryVote');
// });