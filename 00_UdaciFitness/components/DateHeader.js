import React from 'react'
import { Text } from 'react-native'
import { purple } from '../utils/colors'

export default function DateHeader ({ date }) {
  return (
    <Text style={{color: purple, fontSize: 25}}>
      {date}
    </Text>
  )
}

      // <Picker
      //   selectedValue={selectedValue}
      //   style={{ height: 50, width: 150 }}
      //   onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      // >
      // 	<Picker.Item label={selectedValue} value={selectedValue} />
      //   <Picker.Item label="04/17/20" value="04/17/20" />
      //   <Picker.Item label="04/16/20" value="04/16/20" />
      // </Picker>