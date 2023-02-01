import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../components/Button'
import { TextInputCustom } from '../components/TextInputCustom'
import { Title } from '../components/Title'
import { handleUsers } from '../functions/userFunctions'
import { useData } from '../hooks/useData'
import { FAILURE } from '../store/constants'


export const User = ({route}) => {
  const {data,onInputChange} =useData();
  const dispatch=useDispatch();
  const {status}=useSelector(state=>state.user.createrUser);
  const {status:statusUpdateUser,message}=useSelector(state=>state.user.updateUser);
  const user = route.params?.user ? route.params.user :undefined;
  return (
    <View style={style.container}>
      <Title text={user?'Actualizar Usuario':'Crear Usuario'} color={'black'} size={25} />
      <TextInputCustom
          onInputChange={onInputChange}
          keyboardType='default'
          value={data.first_name}
          field={'first_name'}
          placeholder='Nombre'
          defaultValue={user?user.first_name:data.first_name}
      />
      <TextInputCustom
          onInputChange={onInputChange}
          keyboardType='default'
          value={data.last_name}
          field={'last_name'}
          placeholder='Apellido'
          defaultValue={user?user.last_name:data.last_name}
      />
      <TextInputCustom
          onInputChange={onInputChange}
          keyboardType='default'
          value={data.username}
          field={'username'}
          placeholder='Usuario'
          editable={!user?true:false}
          defaultValue={user?user.username:data.username}
      />
      <Button status={status} text={user?'Actualizar':'Crear'} onPress={()=>handleUsers(user,data,dispatch)} />
      {
        statusUpdateUser===FAILURE &&
        (
          <Text style={{color:'red'}}>{message}</Text>
        )
      }
    </View>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:widthPercentageToDP(5),
    justifyContent:'center'
  }
})
