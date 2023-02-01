import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { FloatingActionButton } from '../components/FloatingActionButton'
import { Footer } from '../components/Footer'
import { ImagesList } from '../components/ImagesList'
import { Loading } from '../components/Loading'
import { Menu } from '../components/Menu'
import { useGetImages } from '../hooks/useGetImages'
import { ATTEMPT, NONE, SUCCESS } from '../store/constants'


export const Images = ({navigation}) => {
    const {data,onInputChange,status,images,message}= useGetImages();
    if(status===NONE || status===ATTEMPT){
        <Loading/>
    }
    return (
        <View style={style.container}>
            {
                status===SUCCESS?
                (
                    <>
                        <ImagesList images={images} />
                    </>
                ):
                (
                    <>
                        <Text>{message}</Text>
                    </>
                )
            }
            {
                data.menu && (
                    <Menu navigation={navigation} />
                )
            }
            <FloatingActionButton onInputChange={onInputChange} menu={data.menu} />
            <Footer
                focus={'Imagenes'}
                color={'#2196f3'}
            />
        </View>
    )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:widthPercentageToDP(5)
    }
})