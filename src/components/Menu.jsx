import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
export const Menu = ({navigation}) => {
  return (
    <View style={style.containerMenu}>
        <TouchableOpacity 
            style={style.containerMenuOption}
            onPress={()=>navigation.navigate('NewImage')}
        >
            <Text style={style.textMenu}>Agregar nueva Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={style.containerMenuOption}
            onPress={()=>navigation.navigate('User')}
        >
            <Text style={style.textMenu}>Agregar usuario</Text>
        </TouchableOpacity>
    </View>
  )
}

const style=StyleSheet.create({
    containerMenu:{
        position:'absolute',
        zIndex:5,
        bottom:heightPercentageToDP(20),
        right:5
    },
    containerMenuOption:{
        backgroundColor:'#2196f3',
        padding:widthPercentageToDP(2),
        borderRadius:widthPercentageToDP(1.2),
        marginBottom:heightPercentageToDP(1)
    },
    textMenu:{
        color:'white',
        fontSize:18,
        textAlign:'center'
    }
})