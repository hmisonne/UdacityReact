import React from 'react';
import Question from '../components/Question';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

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

const authorSample = {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  }

test('Question component renders correctly', () => {
  const component = renderer.create(
    <Router>
      <Question 
          question = {questionSample}
          author = {authorSample}
          />
    </Router>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});