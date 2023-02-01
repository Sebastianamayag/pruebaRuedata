import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../router/NavigationRef';
export const UserList = ({users}) => {
  return (
    <ScrollView 
        style={style.container}
        showsVerticalScrollIndicator={false}
    >
        <View style={[style.containerHeaderTable,{marginBottom:heightPercentageToDP(2)}]}>
            <Text style={style.textTableTitle}>Nombre</Text>
            <Text style={style.textTableTitle}>Apellido</Text>
            <Text style={style.textTableTitle}>Usuario</Text>
            <Text style={style.textTableTitle}>Acción</Text>
        </View>
        {
            users.length>0 && users.map((data)=>(
                <View style={style.containerBodyTable} key={data.id} >
                    <Text style={style.textTableData} >{data.first_name}</Text>
                    <Text style={style.textTableData} >{data.last_name}</Text>
                    <Text style={style.textTableData} >{data.username}</Text>
                    <TouchableOpacity
                        onPress={()=>navigate('User',{user:data})}
                    >
                        <Icon name={"edit"} size={widthPercentageToDP(6)} color={'red'} />
                    </TouchableOpacity>
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
    containerHeaderTable:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    containerBodyTable:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'gray',
        borderBottomWidth:widthPercentageToDP(0.2),
        marginBottom:heightPercentageToDP(0.5)
    },
    textTableTitle:{
        fontSize:20,
        fontWeight:'bold',
    },
    textTableData:{
        width:widthPercentageToDP(18),
        textAlign:'left'
    }

})