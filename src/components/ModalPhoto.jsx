import React from 'react';
import * as ImagePicker from "react-native-image-picker";
import Modal from "react-native-modal";
import { StyleSheet, View, TouchableOpacity, Platform, Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {check,request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import { Title } from './Title';


const options = {
    quality: 0.1,
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export const ModalPhoto = ({visible,setVisible,action}) => {
    const  handleImage  = async(type) => {
        try {
            if(type==='camera'){

                await request(Platform.OS ==='android' ? PERMISSIONS.ANDROID.CAMERA: PERMISSIONS.IOS.CAMERA)
                        .then(status => {
                            if(status !=='granted'){
                              return true;
                            }
                        })
                        .catch((error)=>console.log(error))
                check(Platform.OS ==='android' ? PERMISSIONS.ANDROID.CAMERA: PERMISSIONS.IOS.CAMERA).then((result)=>{
                    if(result === RESULTS.GRANTED){
                        ImagePicker.launchCamera(options, response => {
                            if (response.didCancel) {
                                console.log('Se ha cancelado la acción');
                            } else if (response.errorMessage) {
                                alert(response.errorMessage);
                            } else if(response.errorCode){
                                alert(response.errorCode);
                            }else {
                                action(response.assets)
                                // setVisible();
                            }
             });
                    }else{
                        alert('Debes dar permiso de camara')
                    }
                })

            }else{
                ImagePicker.launchImageLibrary(options, response => {

                    if (response.didCancel) {
                        console.log('Se ha cancelado la acción');
                    } else if (response.errorMessage) {
                        alert(response.errorMessage);
                    } else {
                        action(response.assets)
                        // setVisible()
                    }
                });
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Modal
            isVisible={visible}
            onBackButtonPress={()=>setVisible()}
            onBackdropPress={()=>setVisible()}
            backdropOpacity={0.35}
            animationInTiming={1}
            animationOutTiming={1}
            propagateSwipe={true}
        >
            <View style={styles.containerCard}>
                <Title text={'Selecciona una foto'} size={hp(3)}  color={'#003785'}/>
                <View style={{marginTop:hp(3)}}>
                <TouchableOpacity onPress={() => {handleImage('camera')}}>
                    <Text style={styles.textSemiBold}>Tomar una foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:hp(3)}} onPress={() =>{handleImage('library')} }>
                    <Text style={styles.textSemiBold}>Seleccionar desde libreria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:hp(3),alignSelf:'flex-end'}} onPress={() => setVisible()}>
                    <Text style={{...styles.textSemiBold,color:'#1465bb'}}>Cancelar</Text>
                </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
};


const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: 'white',
        height: hp(32),
        padding: hp(4),
        borderRadius: hp(1)
    },
    textSemiBold:{
        fontWeight:'500',
        color:'black',
        fontSize:hp(2.9)
    }
})
