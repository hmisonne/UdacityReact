import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './navigation/MainNav'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { setLocalNotification } from './utils/helpers'

export default class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
    <Provider store={createStore(reducer, middleware)}>
      <View style={styles.container} >
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer >
            <MainNav/>
        </NavigationContainer>
      </View>
    </Provider>
    );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
