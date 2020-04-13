import React from 'react';
// import {cleanup, fireEvent, render} from '@testing-library/react';
import QuestionDetailsPoll from '../components/QuestionDetailsPoll';
import {shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';



configure({ adapter: new Adapter() });

// afterEach(cleanup);

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


test('RadioInput changes the state after click', () => {
  // Render a checkbox with label in the document
  const radioInput = 
  		shallow(<QuestionDetailsPoll 
  			question={questionSample} 
  			submitAnswer={submitAnswerSample}/>);

  expect(radioInput.text()).toEqual('have horrible short term memoryhave horrible long term memoryVote');
});



// it('CheckboxWithLabel changes the text after click', () => {
//   const {queryByLabelText, getByLabelText} = render(
//     <QuestionDetailsPoll 
// 		question={questionSample} 
//   		submitAnswer={submitAnswerSample}/>,
//   );

//   expect(queryByLabelText(/have horrible short term memory/i)).toBeTruthy();


// });