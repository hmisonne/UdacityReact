import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { lightGreen, grey } from '../utils/colors'
import PropTypes from 'prop-types'

export default function SubmitBtn ({children, onPress, style = {} }){
    return(
          <TouchableOpacity
            style={[styles.btn, style]}
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
    marginLeft:100,
    marginRight:100,
  },

  btnText: {
    color:'#fff',
    textAlign:'center',
  }
});

SubmitBtn.propTypes = {
  children: PropTypes.string.isRequired, 
  onPress: PropTypes.func.isRequired, 
  style: PropTypes.object, 
}     