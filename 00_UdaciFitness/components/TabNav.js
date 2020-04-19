import 'react-native-gesture-handler';
import React from 'react';
import History from './History'
import AddEntry from './AddEntry'
import Live from './Live'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { purple, white } from '../utils/colors'
import {
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

const RouteConfigs = {
  History:{
    name: "History",
    component: History,
    options: {tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />, title: 'History'}
  }, 
  Live: {
    name: "Live",
    component: Live,
    options: {tabBarIcon: ({ tintColor }) => <Ionicons name='ios-speedometer' size={30} color={tintColor}/>, title: 'Live'} 
  }
}

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === "ios" ? purple : purple,
    style: {
      height: 56,
      backgroundColor: Platform.OS === "ios" ? white : white,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
  };
const Tab = createBottomTabNavigator();

const TabNav = () =>(
  <Tab.Navigator {...TabNavigatorConfig}>
	<Tab.Screen {...RouteConfigs['History']} />
	<Tab.Screen {...RouteConfigs['Live']} />
  </Tab.Navigator>
)

export default TabNav

