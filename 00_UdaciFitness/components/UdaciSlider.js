import React from 'react'
import { View, Slider, StyleSheet, Text} from 'react-native'

export default function UdaciSlider ({value, unit, onChange, max ,step}) {

  return (
    <View>
    	<Slider 
    		step = {step}
    		maximumValue = {max}
    		minimumValue = {0}
    		value={value}
    		onValueChange={onChange}/>
    		<View>
    			<Text>{value}</Text>
    			<Text>{unit}</Text>
    		</View>
    </View>
  )
} 