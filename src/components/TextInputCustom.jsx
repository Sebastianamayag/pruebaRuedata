import React from 'react'
import { StyleSheet ,TextInput} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

export const TextInputCustom = ({keyboardType,value,placeholder,onInputChange,field,...props}) => {
  return (
    <TextInput 
        style={style.textInput} 
        keyboardType={keyboardType} 
        value={value} 
        placeholder={placeholder} 
        onChangeText={(text) => onInputChange(field,text)}
        {...props}
    />
  )
}


const style=StyleSheet.create({
    textInput: {
        width: widthPercentageToDP(90),
        alignSelf: 'center',
        padding: widthPercentageToDP(3),
        borderBottomWidth: widthPercentageToDP(0.3),
        marginTop: heightPercentageToDP(1),
    },
})