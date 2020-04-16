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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { purple, white } from './utils/colors'
import {
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import Constants from 'expo-constants';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
const Tab = createMaterialTopTabNavigator();

export default class App extends React.Component {
  
  render(){
     return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
                     <NavigationContainer>
            <Tab.Navigator>
               <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </Provider>
  );
  }
 
}


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