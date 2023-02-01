import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
export const ImagesList = ({users: images}) => {
  return (
    <ScrollView 
        style={style.container}
        showsVerticalScrollIndicator={false}
    >
        {
            images.length>0 && images.map((data)=>(
                <View key={data.id}>
                    <Image  style={style.image} source={{uri:'https://images.pexels.com/photos/209807/pexels-photo-209807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}/>
                </View>
            ))
        }
    </ScrollView>
  )
}

const style=StyleSheet.create({
    container:{
        padding:widthPercentageToDP(5),
        marginTop:heightPercentageToDP(2)
    },
    image:{
        borderRadius:widthPercentageToDP(2),
        height:heightPercentageToDP(30),
        width:widthPercentageToDP(80)
    },
})