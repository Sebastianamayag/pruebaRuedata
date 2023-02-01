import React from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { ATTEMPT, NONE } from '../store/constants'

export const Button = ({text,onPress,status=NONE}) => {
  return (
    <TouchableOpacity 
        style={style.button}
        onPress={onPress}
    >
        {
            status!==ATTEMPT?
            (
                <Text style={style.textButton}>{text}</Text>
            ):
            (
                <ActivityIndicator size={heightPercentageToDP(3)} color='white'/>
            )
        }
    </TouchableOpacity>
  )
}

const style=StyleSheet.create({
    button:{
        padding:widthPercentageToDP(4),
        width:widthPercentageToDP(90),
        alignSelf:'center',
        borderRadius:widthPercentageToDP(4),
        borderWidth:widthPercentageToDP(0.2),
        marginTop:heightPercentageToDP(1),
        backgroundColor:'#1465bb'
    },
    textButton:{
        fontSize: RFPercentage(2.5),
        textAlign: 'center',
        color:'white',
        fontWeight:'bold'
    }
})