import React, { useEffect, useState } from 'react'
import NetInfo from "@react-native-community/netinfo";
import { useDispatch, useSelector } from 'react-redux';
import { chageStateNet } from '../store/thunks/infoNetThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { updateUser } from '../store/thunks';
export const useGetNet = () => {
    
    const {status}=useSelector(state=>state.net)
    const dispatch=useDispatch();
    useEffect(() => {
        netInfoListener();
    }, [])

    const netInfoListener = NetInfo.addEventListener(async state => {
    if(state.isConnected){
        const keys =await AsyncStorage.getAllKeys();
        const userKeys=keys.filter((data)=>data.includes('user-'));
        for(let x=0;x<userKeys.length;x++){
            let data= await AsyncStorage.getItem(userKeys[x]);
            data=await JSON.parse(data);
            dispatch(updateUser(data));
            await AsyncStorage.removeItem(userKeys[x])
        }
    }

    if(status!==state){
        dispatch(chageStateNet(state.isConnected))
    }

    });


    return {status}
}
