import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { FloatingActionButton } from '../components/FloatingActionButton'
import { Footer } from '../components/Footer'
import { Loading } from '../components/Loading'
import { Menu } from '../components/Menu'
import { UserList } from '../components/UserList'
import { useData } from '../hooks/useData'
import { useGetNet } from '../hooks/useGetNet'
import { useGetUserData } from '../hooks/useGetUserData'
import { ATTEMPT, NONE, SUCCESS } from '../store/constants'
import NetInfo from "@react-native-community/netinfo";
export const Home = ({navigation}) => {
  const {status,message,users} =useGetUserData()
  const {data,onInputChange}=useData();
  const {status:statusNet}=useGetNet()

  if(status===NONE || status===ATTEMPT){
    <Loading />
  }

  return (
    <View
      style={{zIndex:1,flex:1}}
    >
        {
          status===SUCCESS?
          (
            <>
              <UserList users={users} />
            </>
          ):
          (
            <Text>{message}</Text>
          )
        }
      {
        data.menu && (
          <Menu navigation={navigation} />
        )
      }
      <FloatingActionButton onInputChange={onInputChange} menu={data.menu} />
      <Footer
        focus={'Usuarios'}
        color={'#2196f3'}
      />
    </View>
  )
}
