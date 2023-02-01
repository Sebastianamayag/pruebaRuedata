import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome';
export const FloatingActionButton = ({onInputChange,menu}) => {
  return (
    <TouchableOpacity
      style={style.floatingButton}
      onPress={()=>onInputChange('menu',!menu)}
    >
      {
        !menu?
        (
          <Icon name={"plus"} size={heightPercentageToDP(4)} color={'white'} />
        ):
        (
          <Icon name={"close"} size={heightPercentageToDP(4)} color={'white'} />
        )
      }
    </TouchableOpacity>
  )
}


const style=StyleSheet.create({
    floatingButton:{
        height:heightPercentageToDP(8),
        width:heightPercentageToDP(8),
        borderRadius:heightPercentageToDP(8),
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom:heightPercentageToDP(10),
        right:5,
        zIndex:5,
        backgroundColor:'#2196f3'
    }
})