import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import DeckCard from './DeckCard'


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <DeckCard/>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
