import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import { purple, white } from './utils/colors'
import {
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import Constants from 'expo-constants';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
    
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="AddEntry" component={AddEntry} />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {
  

  render(){
     return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <NavigationContainer>
            <MyStack />
          </NavigationContainer>
        </View>
      </Provider>
  );
  }
 
}

// const Tab = createMaterialTopTabNavigator();
          //  <NavigationContainer>
          //   <Tab.Navigator>
          //      <Tab.Screen name="Home" component={HomeScreen} />
          //       <Tab.Screen name="Settings" component={SettingsScreen} />
          //   </Tab.Navigator>
          // </NavigationContainer>

// const Tabs =
//   Platform.OS === "ios"
//     ? createBottomTabNavigator()
//     : createMaterialTopTabNavigator();
//           <NavigationContainer>
//           <Tabs.Navigator
//             initialRouteName="AddEntry"
//             screenOptions={({ route }) => ({
//               tabBarIcon: ({ color, size }) => {
//                 let icon;
//                 if (route.name === "Add Entry") {
//                   icon = (
//                     <FontAwesome name="plus-square" size={size} color={color} />
//                   );
//                 } else if (route.name === "History") {
//                   icon = (
//                     <Ionicons name="ios-bookmarks" size={size} color={color} />
//                   );
//                 }
//                 return icon;
//               }
//             })}
//             tabBarOptions={{
//               activeTintColor: Platform.OS === "ios" ? purple : white,
//               style: {
//                 height: 80,
//                 backgroundColor: Platform.OS === "ios" ? white : purple,
//                 shadowColor: "rgba(0, 0, 0, 0.24)",
//                 shadowOffset: {
//                   width: 0,
//                   height: 3
//                 },
//                 shadowRadius: 6,
//                 shadowOpacity: 1
//               }
//             }}
//           >
//             <Tabs.Screen name="Add Entry" component={AddEntry} />
//             <Tabs.Screen name="History" component={History} />
//           </Tabs.Navigator>
//         </NavigationContainer>


// var sharedBlacklist = [
//   /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
//   /website\/node_modules\/.*/,
//   /heapCapture\/bundle\.js/,
//   /.*\/__tests__\/.*/
// ];
// node_modules\metro-config\src\defaults