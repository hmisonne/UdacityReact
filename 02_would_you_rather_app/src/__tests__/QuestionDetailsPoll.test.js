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


test('Options displayed correctly', () => {
  // Render a text correctly
  const radioInput = 
  		shallow(<QuestionDetailsPoll 
  			question={questionSample} 
  			submitAnswer={submitAnswerSample}/>);

  expect(radioInput.text()).toEqual('have horrible short term memoryhave horrible long term memoryVote');
});