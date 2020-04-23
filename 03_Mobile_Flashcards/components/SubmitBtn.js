import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lightGreen, grey } from '../utils/colors'

export default function SubmitBtn ({children, onPress}){
    return(
          <TouchableOpacity
            style={styles.btn}
            onPress = {onPress}>
            <Text style={styles.btnText}> {children} </Text>
          </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
  btn : {
    backgroundColor:lightGreen,
    borderRadius:10,
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
  },

  btnText: {
    color:'#fff',
    textAlign:'center',
  }
});
