import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'
// import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
// import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { purple, white } from './utils/colors'
import {
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";
import Constants from 'expo-constants';

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}



export default class App extends React.Component {
  
  render(){
     return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <History/>
        </View>
      </Provider>
  );
  }
 
}


// <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
// <TabNav />


// const Tabs = {
//   History: {
//     screen: History,
//     navigationOptions: {
//       tabBarLabel: 'History',
//       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
//     },
//   },
//   AddEntry: {
//     screen: AddEntry,
//     navigationOptions: {
//       tabBarLabel: 'Add Entry',
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
//     },
//   },
// }

// const navigationOptions = {
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? purple : white,
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === 'ios' ? white : purple,
//       shadowColor: 'rgba(0, 0, 0, 0.24)',
//       shadowOffset: {
//         width: 0,
//         height: 3
//       },
//       shadowRadius: 6,
//       shadowOpacity: 1
//     }
//   }
// }

// const TabNav = createAppContainer(Platform.OS === 'ios' ? createBottomTabNavigator(Tabs, navigationOptions) : createMaterialTopTabNavigator(Tabs, navigationOptions))
