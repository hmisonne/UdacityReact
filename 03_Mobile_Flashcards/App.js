import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './navigation/MainNav'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { setLocalNotification } from './utils/helpers'
import Constants from 'expo-constants';
import { grey } from './utils/colors'

function StyledStatusBar() {
    return (
        <View style={{ backgroundColor: grey, height: Constants.statusBarHeight }}>
           <StatusBar translucent backgroundColor='#ccc' barStyle="dark-content" />
        </View>
    )
}

export default class App extends Component {
    componentDidMount() {
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={createStore(reducer, middleware)} >
                <View style={styles.container} >
                    <StyledStatusBar />
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