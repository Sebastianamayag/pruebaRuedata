import AsyncStorage from "@react-native-async-storage/async-storage"
import apiDB from "../../api/Api"
import { goBack, navigate } from "../../router/NavigationRef"
import { CREATE_USER_ATTEMPT, CREATE_USER_FAILURE, CREATE_USER_SUCCESS, LOAD_USER_ATTEMPT, LOAD_USER_FAILURE, LOAD_USER_SUCCESS, UPDATE_USER_ATTEMPT, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS } from "../slice/usersReducer"


export const getUsers=()=>{
    return async(dispatch)=>{
        dispatch(LOAD_USER_ATTEMPT())
        try {
            const {data}=await apiDB.get('/data/users/')
            if(data){
                dispatch(LOAD_USER_SUCCESS({users:data}))
            }else{
                dispatch(LOAD_USER_FAILURE())
            }
        } catch (error) {
            dispatch(LOAD_USER_FAILURE())
        }
    }
}


export const createrUser=({first_name,last_name,username})=>{
    return async(dispatch,getState)=>{
        try {
            dispatch(CREATE_USER_ATTEMPT());
            const {data}=await apiDB.post('/data/users/',{first_name,last_name,username});
            if(data){
                dispatch(CREATE_USER_SUCCESS());
                navigate('Home');
                dispatch(getUsers());
            }else{
                dispatch(CREATE_USER_FAILURE());
            }
        } catch (error) {
            dispatch(CREATE_USER_FAILURE());
        }
    }
}


export const updateUser=({first_name,last_name,username})=>{
    return async(dispatch,getState)=>{
        dispatch(UPDATE_USER_ATTEMPT())
        try {
            const {data}=await apiDB.put('/data/users/ ',{first_name,last_name,username});
            if(data){
                dispatch(UPDATE_USER_SUCCESS());
                goBack();
                dispatch(getUsers());
            }else{
                dispatch(UPDATE_USER_FAILURE());
            }
        } catch (error) {
            const keys =await AsyncStorage.getAllKeys();
            const userKeys=keys.filter((data)=>data.includes('user-'));
            let asyncData={first_name,last_name,username}
            asyncData=await JSON.stringify(asyncData);
            await AsyncStorage.setItem(`user-${userKeys.length}`,asyncData)
            dispatch(UPDATE_USER_FAILURE());
        }
    }
}