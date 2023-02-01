import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux'
import { Button } from '../components/Button'
import { ModalPhoto } from '../components/ModalPhoto'
import { useData } from '../hooks/useData'
import { uploadImages } from '../store/thunks/imagesThunk'

export const NewImage = () => {
  const {data,onInputChange}=useData();
  const dispatch=useDispatch();
  const handleImage=(image)=>{
    onInputChange('modal',false)
    onInputChange('image',image)
  }
  return (
    <View style={style.container}>
        <ModalPhoto  
          visible={data.modal}  
          setVisible={()=>onInputChange('modal',false)}
          action={handleImage}
        />
        {
          data.image?
          (
            <Image 
              style={style.Image} 
              source={{uri:`${data.image[0].uri}`}}  
            />
          ):
          (
            <Image 
            style={style.Image} 
            source={require('../assets/icon-image.png')}  
          />
          )    
        }

        <Button text={'Agregar nueva foto'} onPress={()=>onInputChange('modal',true)} />
        <Button 
          text={'Subir nueva foto'} 
          onPress={()=>{
            if(data.image){
              dispatch(uploadImages(data.image[0]))
            }else{
              alert('Error debe seleccionar una foto antes')
            }
          }} 
        />
    </View>
  )
}
const style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Image:{
      height:heightPercentageToDP(50),
      width:widthPercentageToDP(70),
      borderRadius:widthPercentageToDP(3)
    }
})