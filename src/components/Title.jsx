import React from 'react'
import { Text } from 'react-native'

export const Title = ({size,color,text}) => {
  return (
    <Text style={{fontSize:size,color,textAlign:'center',alignSelf:'center'}}>{text}</Text>
  )
}
