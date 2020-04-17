import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import EntryDetail from './components/EntryDetail'
import TabNav from './components/TabNav'
import { purple, white } from './utils/colors'

import Constants from 'expo-constants';

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}



// Config for StackNav
const StackNavigatorConfig = {
  headerMode: "screen"
}
const StackConfig = {
  TabNav:{
    name: "Home",
    component: TabNav,
    options: {headerShown: false}
  }, 
  EntryDetail:{
    name: "EntryDetail",
    component: EntryDetail,
    options: {
      headerTintColor: white,
      headerStyle:{
        backgroundColor: purple
      },
      title: "Entry Detail"
    }
  }
}
const Stack = createStackNavigator();

const MainNav = () =>(
  <Stack.Navigator {...StackNavigatorConfig}>
    <Stack.Screen {...StackConfig['TabNav']} />
    <Stack.Screen {...StackConfig['EntryDetail']} />
  </Stack.Navigator>
)

export default class App extends React.Component {
  

  render(){
     return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <NavigationContainer>
             <MainNav />
          </NavigationContainer>
        </View>
      </Provider>
  );
  }
 
}