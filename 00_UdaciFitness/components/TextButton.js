import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function TextButton ({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}>
        <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}
