import 'react-native-gesture-handler';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DeckView from './screens/DeckView'
import Quizz from './screens/Quizz'
import NewQuestion from './screens/NewQuestion'

import BottomTabNavigator from './navigation/BottomTabNavigator';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const Stack = createStackNavigator();

const MainNav = () => (
<Stack.Navigator initialRouteName="Root">
    <Stack.Screen name="Root" component={BottomTabNavigator} />
    <Stack.Screen name="DeckView" component={DeckView} />
    <Stack.Screen name="Quizz" component={Quizz} />
    <Stack.Screen name="NewQuestion" component={NewQuestion} />
  </Stack.Navigator>
  )

export default function App(props) {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer >
            <MainNav/>
        </NavigationContainer>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
