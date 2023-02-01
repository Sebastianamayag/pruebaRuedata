import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const Loading = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
        <ActivityIndicator size={50} color={'#2196f3'} />
    </View>
  )
}
