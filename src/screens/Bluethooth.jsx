import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux';
import { Button } from '../components/Button'
import { Footer } from '../components/Footer'
import { useGetBluethooth } from '../hooks/userGetBluethooth'
import { sendDataBluethooth } from '../store/thunks/bluethoothThunk';
export const Bluethooth = () => {
  const {permissions,startScan,list,isScanning} =useGetBluethooth();
  const dispatch=useDispatch();
  return (
    <View style={style.container}>
        <View style={{margin: 10}}>
            {(list.length === 0) &&(
              <View style={{margin: 20}}>
                <Text style={{textAlign: 'center',color:'black'}}>No se encontraron dispositivos</Text>
              </View>
            )
              
            }
            {
              list.map((data)=>(
                <TouchableOpacity
                  onPress={()=>dispatch(sendDataBluethooth({note:'hola'}))}
                >
                  <Text style={style.textButton}>{data.name}</Text>
                </TouchableOpacity>
              ))
            }
          <Button 
            text={'Buscar Dispositivos (' + (isScanning ? 'on' : 'off') + ')'}
            onPress={() => {if(permissions)startScan()} } 
          />            
        </View>
        <Footer
            focus={'Bluetooth'}
            color={'#2196f3'}
        />
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:widthPercentageToDP(5)
    },
    textButton:{
      fontSize: 12,
      textAlign: 'center', 
      color: '#333333', 
      padding: 10
    }
})