import 'react-native-gesture-handler';
import React from 'react';
import History from './History'
import AddEntry from './AddEntry'
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
  AddEntry:{
    component: AddEntry,
    name: "Add Entry",
    options: {tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor} />, title: 'Add Entry'}
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
	<Tab.Screen {...RouteConfigs['AddEntry']} />
  </Tab.Navigator>
)

export default TabNav

