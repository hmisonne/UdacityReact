import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DeckView from '../screens/DeckView'
import Quizz from '../screens/Quizz'
import NewQuestion from '../screens/NewQuestion'

import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const MainNav = () => (
<Stack.Navigator initialRouteName="Root">
    <Stack.Screen name="Root" component={BottomTabNavigator} />
    <Stack.Screen name="DeckView" component={DeckView} />
    <Stack.Screen name="Quizz" component={Quizz} />
    <Stack.Screen name="NewQuestion" component={NewQuestion} />
  </Stack.Navigator>
  )

export default MainNav