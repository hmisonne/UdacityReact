import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeckView from '../screens/DeckView'
import Quizz from '../screens/Quizz'
import NewQuestion from '../screens/NewQuestion'
import { lightGreen, grey, blue } from '../utils/colors'
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const StackNavigatorConfig = {
	headerMode: "screen"
}

const StackConfig = {
	NewQuestion:{
		name: "NewQuestion",
		component: NewQuestion,
		options: {
			title: 'Add New Question',
      		headerTintColor: '#fff',
      		headerStyle:{
        		backgroundColor: blue
      		},
      	},
	},
	Quizz:{
		name: "Quizz",
		component: Quizz,
		options: {
			title: 'Quizz',
      		headerTintColor: '#fff',
      		headerStyle:{
        		backgroundColor: blue
      		},
      	},
	},
	DeckView:{
		name: "DeckView",
		component: DeckView,
		options: {
			title: 'DeckView',
      		headerTintColor: '#fff',
      		headerStyle:{
        		backgroundColor: blue
      		},
      	},
	}
}





const MainNav = () => (
<Stack.Navigator 
	initialRouteName="Root"  {...StackNavigatorConfig}>
    <Stack.Screen name="Root" component={BottomTabNavigator} />
    <Stack.Screen {...StackConfig['DeckView']} />
    <Stack.Screen {...StackConfig['Quizz']} />
    <Stack.Screen {...StackConfig['NewQuestion']}/>
  </Stack.Navigator>
  )

export default MainNav